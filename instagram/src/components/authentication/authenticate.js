import React, { Component } from 'react';

const authenticate = App => LoginPage => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        if (localStorage.getItem('user') === false) {
            this.setState({ loggedIn: false })
        } else {
            this.setState({ loggedIn: true })
        }
    }

    render() {
        if (this.state.loggedIn) {
            return <App />
        } else {
            return <LoginPage />
        }
    }
}

export default authenticate;