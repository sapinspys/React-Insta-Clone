import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     dummyData: [],
  //     commentText:'',
  //     searchText: ''
  //   }
  // }

  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

export default App;
