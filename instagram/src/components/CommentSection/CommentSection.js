import React from 'react';

function CommentSection(props) {
    return (
        <div className="comment-container">
            <p className="comment"><strong>{props.comment.username}</strong> {props.comment.text}</p>
        </div>
    )
}

export default CommentSection