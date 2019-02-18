import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData // Same as dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          {this.state.dummyData.map(post => (
            <PostContainer />
          ))};
        </header>
      </div>
    );
  }
}

export default App;
