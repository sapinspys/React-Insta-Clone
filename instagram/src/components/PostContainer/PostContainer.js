import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import heart from '../../img/heart-icon.png';
import comment from '../../img/comment-icon.png';
import more from '../../img/more-icon.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Username from '../../styles/reusables'

function PostContainer(props) {
    return (
        <PostCard>
            <UserContainer>
                <UserThumbnail src={props.post.thumbnailUrl} 
                    alt="thumbnail" 
                    width='35' 
                    height='35'/>
                <Username bold>{props.post.username}</Username>
            </UserContainer>
            <PostImage src={props.post.imageUrl} alt="post" />
            <CommentsContainer>
                <div>
                    <CommentsButton src={heart} 
                        alt="heart" 
                        height='30' 
                        onClick={props.addLikes} />
                    <CommentsButton src={comment} 
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
            </CommentsContainer>
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
    margin: 15px 15px;
`;

const UserThumbnail = styled.img`
    border-radius: 40px;
    margin-right: 10px;
`;

const PostImage = styled.img`
    width: 600px;
`;

const CommentsContainer = styled.div`
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 10px;
    width: 570px;
    font-size: 0.9rem;
`;

const CommentsButton = styled.img`
    margin-right: 15px;
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