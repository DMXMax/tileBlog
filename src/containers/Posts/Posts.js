import React, { Component } from 'react';
import Post from '../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import axios from 'axios';
import './Posts.css'
import { Link, Route } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };
    componentDidMount() {
        this.loadData();
    }


    loadData(){
        axios.get('/posts')
        .then(response => {
            const origPosts = response.data.slice(0, 6)
            const posts = origPosts.map(post => {
                return { ...post, author: 'Mr.G' }
            });
            this.setState({ posts });
            //console.log(response);
        }).catch(err => console.log(err));
    }

    postSelectedHandler = (id) => {
       // this.setState({ selectedPostId: id });
       this.props.history.push('/posts/'+ id);

    }

    render() {
        const posts = this.state.posts.map(post => {
            return (<Link key={post.id} to={'/posts/' + post.id}><Post key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} /></Link>);
        });

        return (<div>
             
            <section className="Posts">
                {posts}
            </section>
            
            <Route path={this.props.match.url +'/:id'} exact component={FullPost}/>
        </div>
        )
    }
}

export default Posts;