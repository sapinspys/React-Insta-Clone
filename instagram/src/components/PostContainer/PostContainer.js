import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import moment from 'moment';
import heart from '../../img/heart-icon.png';
import comment from '../../img/comment-icon.png';
import more from '../../img/more-icon.png';
import PropTypes from 'prop-types';

function PostContainer(props) {
    return (
        <div className="post-container">
            <div className="post-user">
                <img src={props.post.thumbnailUrl} alt="thumbnail" width='35' height='35'/>
                <p><strong>{props.post.username}</strong></p>
            </div>
            <img src={props.post.imageUrl} className='post-image' alt="post" />
            <div className="comment-section">
                <div className="post-buttons">
                    <img src={heart} alt="heart" height='30' onClick={props.addLikes} />
                    <img src={comment} alt="comment" height='30'/>
                </div>
                <p className="post-likes"><strong>{props.post.likes} likes</strong></p>
                <CommentSection comments={props.post.comments} />
                <p className="post-timestamp">{moment(props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
                <form className="post-add-comment" data-index={props.index} onSubmit={props.commentSubmit}>
                    <input type='text' value={props.text} onChange={props.commentChange} placeholder='Add a comment...'/>
                    <img src={more} alt="more" height='25'/>
                </form>
            </div>
        </div>
    )
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array,
    })
}

export default PostContainer;