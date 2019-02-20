import React, { Component } from 'react';

const authenticate = App => LoginPage => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false;
        }
    }

    render() {
        return <App />
    }
}

export default authenticate;