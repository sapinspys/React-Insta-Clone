import React from 'react';
import './CommentSection.css';
// import PropTypes from 'prop-types';

function Comment(props) {
    return (
        <div className="comment-container">
            <p className="comment"><strong>{props.comment.username}</strong> {props.comment.text}</p>
        </div>
    )
}

export default Comment;