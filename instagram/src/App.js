import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData, // Same as dummyData: dummyData
      text:''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const newData = [...this.state.dummyData];
    newData[e.target.getAttribute('data-index')].comments.push({username:'testuser23',text:`${this.state.text}`});

    this.setState(() => {
      return ({
        dummyData: newData,
        text: ''
      })
    })
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          {this.state.dummyData.map((post, index) => (
            <PostContainer key={index} 
              post={post} 
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              index={index}
              text={this.state.text} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
