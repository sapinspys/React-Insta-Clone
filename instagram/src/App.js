import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PropTypes from 'prop-types';

class App extends Component {
  // CONSTRUCTOR LIFECYCLE METHOD IS OPTIONAL, UNLESS YOU NEED TO USE A REF OR METHOD BINDING
  constructor() {
    super();
    this.state = {
      dummyData,
      text: ''
    }
  }

  // This approach is widely preferred apparently.
  // state = {
  //   dummyData,
  //   text:''
  // }

  // componentDidMount() {
  //   this.setState ({
  //     dummyData: dummyData,
  //     text:''
  //   })
  // }

  handleSubmit = e => {
    e.preventDefault();
    const newData = [...this.state.dummyData];
    newData[e.target.getAttribute('data-index')].comments.push({username:'testuser',text:`${this.state.text}`});

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
        <SearchBar />
        <header className="app-header">
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

App.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
}

export default App;
