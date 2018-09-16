import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Mr. G',
        //submitted: false,
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
        };

        axios.post('/posts', post)
            .then(response => {
                console.log(response);
                //this.setState({ submitted: true });
                this.props.history.push("/posts");
            }
            );
    }


    render() {
        return ((this.state.submitted ? (<Redirect to="/" />) :
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title}
                    onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4"
                    value={this.state.content}
                    onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author}
                    onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Mr. G">Mr. G</option>
                    <option value="Mr. K">Mr. K</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        ));
    }
}

export default NewPost;
