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
                <Likes>{props.post.likes} likes</Likes>
                <CommentSection comments={props.post.comments} />
                <Timestamp>{moment(props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</Timestamp>
                <CommentForm data-index={props.index} onSubmit={props.commentSubmit}>
                    <CommentInput type='text' 
                        value={props.text} 
                        onChange={props.commentChange} 
                        placeholder='Add a comment...'/>
                    <img src={more} alt="more" height='20'/>
                </CommentForm>
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

const Likes = styled.p`
    margin: 0;
    margin-top: 8px;
    font-weight: 500;
`;

const Timestamp = styled.p`
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
    margin-bottom: 10px;
    margin-top: 0;
    color: gray;
    font-size: 0.8rem;
`;

const CommentForm = styled.form`
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    padding-top: 5px;
`;

const CommentInput = styled.input`
    border: 0px solid;
    font-size: 0.9rem;
    font-weight: 300;
    width: 100%;
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