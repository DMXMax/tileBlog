import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post;
        if(!this.props.id)
        {
            post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        }
        else
        {
          post = (
              <div className="FullPost">
                  <h1>Title</h1>
                  <p>Content</p>
                  <div className="Edit">
                      <button className="Delete">Delete</button>
                  </div>
              </div>

          );
        }
        return post;
    }
}

export default FullPost;