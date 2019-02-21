import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import heart from '../../img/heart-icon.png';
import comment from '../../img/comment-icon.png';
import more from '../../img/more-icon.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function PostContainer(props) {
    return (
        <PostCard className="post-container">
            <UserContainer className="post-user">
                <UserThumbnail src={props.post.thumbnailUrl} 
                    alt="thumbnail" 
                    width='35' 
                    height='35'/>
                <p>{props.post.username}</p>
            </UserContainer>
            <img src={props.post.imageUrl} 
                className='post-image' 
                alt="post" />
            <div className="comment-section">
                <div className="post-buttons">
                    <img src={heart} 
                        alt="heart" 
                        height='30' 
                        onClick={props.addLikes} />
                    <img src={comment} 
                        alt="comment" 
                        height='30'/>
                </div>
                <p className="post-likes">{props.post.likes} likes</p>
                <CommentSection comments={props.post.comments} />
                <p className="post-timestamp">{moment(props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
                <form className="post-add-comment" data-index={props.index} onSubmit={props.commentSubmit}>
                    <input type='text' value={props.text} onChange={props.commentChange} placeholder='Add a comment...'/>
                    <img src={more} alt="more" height='25'/>
                </form>
            </div>
        </PostCard>
    )
}

const PostCard = styled.div`
    margin-top: 60px;
    border: 1px solid #E0E0E0;
    background: white;
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 12px;
`;

const UserThumbnail = styled.img`
    border-radius: 40px;
    margin-right: 10px;
`;

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