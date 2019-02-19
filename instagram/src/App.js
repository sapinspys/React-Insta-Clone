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
      dataBackup: [],
      commentText:'',
      searchText: ''
    }
  }

  // This approach is widely preferred apparently.
  // state = {
  //   dummyData,
  //   text:''
  // }

  componentDidMount() {
    this.setState ({
      dummyData: dummyData
    })
  }

  handleCommentChange = e => {
    this.setState({
      commentText: e.target.value
    })
  }

  addNewComment = e => {
    e.preventDefault();
    let index = e.target.getAttribute('data-index');
    const newData = [...this.state.dummyData];
    newData[index].comments.push({username:'testuser',text:`${this.state.commentText}`});

    this.setState(() => {
      return ({
        dummyData: newData,
        commentText: '',
      })
    })
  }

  handleSearchChange = e => {
    this.setState({
      searchText: e.target.value
    })
  }

  filterBySearch = e => {
    e.preventDefault();
    const newData = [...this.state.dummyData];
    const filteredData = [];
    for (let obj of newData) {
      if (obj.username === this.state.searchText) {
        filteredData.push(obj);
      }
    }

    this.setState(() => {
      return ({
        dummyData: filteredData,
        searchText: '',
      })
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
        <SearchBar searchSubmit={this.filterBySearch}
          searchChange={this.handleSearchChange}
          text={this.state.searchText} />
        <header className="app-header">
          {this.state.dummyData.map((post, index) => (
            <PostContainer key={index} 
              post={post} 
              commentSubmit={this.addNewComment}
              commentChange={this.handleCommentChange}
              addLikes={this.handleLikes}
              index={index}
              text={this.state.commentText} />
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
