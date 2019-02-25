import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Username from '../../styles/reusables';

function Comment(props) {
    return <SingleComment><Username>{props.comment.username}</Username> {props.comment.text}</SingleComment>
}

const SingleComment = styled.p`
    margin: 8px 0;
`;

export default Comment;