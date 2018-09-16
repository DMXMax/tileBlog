import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null

  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(){
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (!this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== parseInt(this.props.match.params.id,10))) {
        axios.get("/posts/" + this.props.match.params.id)
          .then(response => {
            this.setState({ loadedPost: response.data });
          });
      }
    }
  }

  deletePostHandler = () => {
    //https://jsonplaceholder.typicode.com/posts 
    console.log("Deleting " + this.props.match.params.id);
    axios.delete("/posts/" + this.props.match.params.id)
      .then(response => console.log(response));
  }

  render() {
    let post;
    if (!this.props.match.params.id) {
      post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    }
    else {
      if (this.state.loadedPost == null) {
        post = <p style={{ textAlign: 'center' }}>Loading...</p>;
      }
      else {
        post = (
          <div className="FullPost">
            <h1>{this.state.loadedPost.title}</h1>
            <p>{this.state.loadedPost.body}</p>
            <div className="Edit">
              <button onClick={this.deletePostHandler}
                className="Delete">Delete</button>
            </div>
          </div>

        );
      }
    }
    return post;
  }
}

export default FullPost;
