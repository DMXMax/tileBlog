import React, { Component } from 'react';

import './Blog.css';
import Posts from '../Posts/Posts';
//import NewPost from '../NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
const AsyncNewPost = asyncComponent(()=>{
    return import('../NewPost/NewPost');
});
//import FullPost from '../FullPost/FullPost'

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Home</NavLink></li>
                            <li><NavLink to="/new-post" exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={()=><Posts/>}/>
                <Route path="/new-post" exact render={()=><h1><NewPost /></h1>}/>*/}
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/posts"  component={Posts} />
                    <Redirect from="/" exact to="/posts"/>
                    {/*<Route path="/" component={Posts}/> <--legal, but there's also Redirect*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;
