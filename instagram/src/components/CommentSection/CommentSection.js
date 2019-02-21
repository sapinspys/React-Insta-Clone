import React, { Component } from 'react';
import Comment from './Comment'
// import PropTypes from 'prop-types';


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }

    render() {
        return(
            <div>
                {this.state.comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        )
    }
}

// CommentSection.propTypes = {
//     comment: PropTypes.shape({
//         username: PropTypes.string,
//         text: PropTypes.string
//     })
// }

export default CommentSection