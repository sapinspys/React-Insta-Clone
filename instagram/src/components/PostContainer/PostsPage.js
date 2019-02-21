import React, { Component } from 'react';
import '../../App.css';
import dummyData from '../../dummy-data';
import SearchBar from '../../components/SearchBar/SearchBar';
import PostContainer from '../../components/PostContainer/PostContainer';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import github from '../../img/github-icon.png';
import linkedin from '../../img/linkedin-icon.png';

class PostsPage extends Component {
  // CONSTRUCTOR LIFECYCLE METHOD IS OPTIONAL, UNLESS YOU NEED TO USE A REF OR METHOD BINDING
  constructor() {
    super();
    this.state = {
      dummyData: [],
      commentText:'',
      searchText: ''
    }
  }

  // This approach is widely preferred apparently
  // state = {
  //   dummyData,
  //   text:''
  // }

  componentDidMount() {
    this.setState({dummyData})
    this.hydrateStateWithLocalStorage()
  }

  // https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2
  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      // if the state key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
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
    newData[index].comments.push({username:localStorage.getItem('user'),text:`${this.state.commentText}`});

    this.setState(() => {
      return ({
        dummyData: newData,
        commentText: ''
      })
    })

    localStorage.setItem("dummyData", JSON.stringify(newData));
    localStorage.setItem("commentText", "");
  }

  handleSearchChange = e => {
    this.setState({
      searchText: e.target.value
    })
  }

  filterBySearch = e => {
    e.preventDefault();
    let postContainers = document.querySelectorAll('.post-container');
    let usernameContainer = []
    for (let post of this.state.dummyData) {
      usernameContainer.push(post.username);
    }

    if (this.state.searchText === '') {
      for (let post of postContainers) {
        post.style.display = 'block';
      } 
    } else if (usernameContainer.includes(this.state.searchText) === false) {
      for (let post of postContainers) {
        post.style.display = 'none';
      } 
    } else {
      for (let post of this.state.dummyData) {
        if (this.state.searchText !== post.username) {
          postContainers[this.state.dummyData.indexOf(post)].style.display='none'
        } else {
          postContainers[this.state.dummyData.indexOf(post)].style.display='block'
        }
      }
    }
  }

  handleLikes = e => {
    let index = e.target.parentNode.parentNode.querySelector('form').getAttribute('data-index');
    const newData = [...this.state.dummyData];
    newData[index].likes += 1;

    this.setState(() => {
      return ({dummyData: newData})
    })

    localStorage.setItem("dummyData", JSON.stringify(newData));
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
          <Footer>  
            <Credits>Designed by Guillermo Arria-Devoe</Credits>
            <IconContainer>
              <a href="https://github.com/sapinspys" target="_blank"><SocialIcon src={github} /></a>
              <a href="https://www.linkedin.com/in/guillermo-arria-devoe/" target="_blank"><SocialIcon src={linkedin} height='30' /></a>
            </IconContainer>
        </Footer>
        </header>
      </div>
    );
  }
}

const Footer = styled.footer`
  border-top: 1px solid #E0E0E0;
  display: flex;
  justify-content: center;
  background: white;
  margin-top: 50px;
  width: 100%;
  padding: 15px 0;
`;

const IconContainer = styled.div`

`;

const SocialIcon = styled.img`
  margin-right: 10px;
`;

const Credits = styled.p`
  font-size: 0.9rem;
  margin: 5px 15px;
  font-weight: 300;
`;

PostsPage.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
}

export default PostsPage;
