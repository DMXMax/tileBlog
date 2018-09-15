import React, {Component} from 'react';
import Post from '../../components/Post/Post'
import axios from 'axios';
import './Posts.css'
import {Link} from 'react-router-dom';

class Posts extends Component {
    state = {
        posts:[],
        selectedPostId:null
    };
   componentDidMount(){
    axios.get('/posts')
      .then(response=>{
        const origPosts = response.data.slice(0,6)
        const posts = origPosts.map(post=>{
          return {...post, author:'Mr.G'}
        });
        this.setState({posts});
        //console.log(response);
      }).catch(err=>console.log(err));
  }
   postSelectedHandler=(id)=>{
       this.setState({selectedPostId:id});
  
  }

    render(){ 
        const posts = this.state.posts.map(post=>{
            return (<Link key={post.id} to={'/'+post.id}><Post key={post.id} 
            title={post.title}
            author={post.author}
            clicked={()=>this.postSelectedHandler(post.id)}/></Link>);
          });
        return (<section className="Posts">
                    {posts}
                </section>)
    }
}

export default Posts;