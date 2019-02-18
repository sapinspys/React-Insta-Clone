import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'

function PostContainer(props) {
    return (
        <div className="post-container">
            <div className="post-user">
                <img src={props.post.thumbnailUrl} alt="thumbnail" width='50' height='50'/>
                <p><strong>{props.post.username}</strong></p>
            </div>
            <img src={props.post.imageUrl} alt="post-image" />
            <div className="post-buttons">
                <img src="../../img/heart-icon.png" alt="heart"/>
                <img src="../../img/comment-icon.png" alt="comment"/>
            </div>
            <p className="post-likes">{props.post.likes} likes</p>
            {props.post.comments.map((comment, index) => (
                <CommentSection key={index} comment={comment} />
            ))}
            <p className="post-timestamp">{props.post.timestamp}</p>
            <p className="post-add-comment">Add a comment...</p>
        </div>
    )
}

export default PostContainer;