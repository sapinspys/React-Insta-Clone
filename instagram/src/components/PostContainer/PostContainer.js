import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

function PostContainer(props) {
    return (
        <div className="post-container">
            <div className="post-user">
                <img src={props.post.thumbnailUrl} alt="thumbnail"/>
                <p>{props.post.username}</p>
            </div>
            <img src={props.post.imageUrl} alt="post-image"/>
            <div className="post-buttons">
                {/* BUTTONS HERE */}
            </div>
            {/* {props.post.comments.map((comment, index) => (
            <CommentSection key={index} comment={comment} /> */}
        </div>
    )
}

export default PostContainer;