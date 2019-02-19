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
      dummyData: [],
      text: null
    }
  }

  // This approach is widely preferred apparently.
  // state = {
  //   dummyData,
  //   text:''
  // }

  componentDidMount() {
    console.log('test')
    this.setState ({
      dummyData: dummyData,
      text:''
    })
  }

  addNewComment = e => {
    e.preventDefault();
    let index = e.target.getAttribute('data-index');
    const newData = [...this.state.dummyData];
    newData[index].comments.push({username:'testuser',text:`${this.state.text}`});

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

  handleLikes = e => {
    let index = e.target.parentNode.parentNode.querySelector('form').getAttribute('data-index');
    const newData = [...this.state.dummyData];
    newData[index].likes += 1;

    this.setState(() => {
      return ({dummyData: newData})
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
              commentSubmit={this.addNewComment}
              commentChange={this.handleChange}
              addLikes={this.handleLikes}
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
