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
            <div className="comment-section">
                <div className="post-buttons">
                    <img src="../../img/heart-icon.png" alt="heart"/>
                    <img src="../../img/comment-icon.png" alt="comment"/>
                </div>
                <p className="post-likes"><strong>{props.post.likes} likes</strong></p>
                {props.post.comments.map((comment, index) => (
                    <CommentSection key={index} comment={comment} />
                ))}
                <p className="post-timestamp">{props.post.timestamp}</p>
                <form className="post-add-comment" data-index={props.index} onSubmit={props.onSubmit}>
                    <input type='text' value={props.text} onChange={props.onChange} placeholder='Add a comment...'/>
                    <img src="../../img/more-icon.png" alt="more"/>
                </form>
            </div>
        </div>
    )
}

export default PostContainer;