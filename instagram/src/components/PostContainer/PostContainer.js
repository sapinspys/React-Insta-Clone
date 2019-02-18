import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import moment from 'moment';
import heart from '../../img/heart-ig.svg';
import comment from '../../img/comment-icon.png';
import more from '../../img/more-icon.png';

function PostContainer(props) {
    return (
        <div className="post-container">
            <div className="post-user">
                <img src={props.post.thumbnailUrl} alt="thumbnail" width='40' height='40'/>
                <p><strong>{props.post.username}</strong></p>
            </div>
            <img src={props.post.imageUrl} alt="post-image" />
            <div className="comment-section">
                <div className="post-buttons">
                    <img src={heart} alt="heart" height='25'/>
                    <img src={comment} alt="comment" height='25'/>
                </div>
                <p className="post-likes"><strong>{props.post.likes} likes</strong></p>
                {props.post.comments.map((comment, index) => (
                    <CommentSection key={index} comment={comment} />
                ))}
                <p className="post-timestamp">{moment(props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
                <form className="post-add-comment" data-index={props.index} onSubmit={props.onSubmit}>
                    <input type='text' value={props.text} onChange={props.onChange} placeholder='Add a comment...'/>
                    <img src={more} alt="more" height='25'/>
                </form>
            </div>
        </div>
    )
}

export default PostContainer;