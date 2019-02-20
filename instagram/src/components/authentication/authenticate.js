import React, { Component } from 'react';

const authenticate = App => LoginPage => class extends Component {
    render() {
        return <App />
    }
}

export default authenticate;