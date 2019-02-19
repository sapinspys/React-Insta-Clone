import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

function CommentSection(props) {
    return (
        <div className="comment-container">
            <p className="comment"><strong>{props.comment.username}</strong> {props.comment.text}</p>
        </div>
    )
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection