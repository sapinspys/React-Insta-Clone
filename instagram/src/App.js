import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate'
import LoginPage from './components/Login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

export default withAuthenticate(App)(LoginPage); //KNOWN AS CURRYING
