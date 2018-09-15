import React, { Component } from 'react';

import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost'
import FullPost from '../FullPost/FullPost'
import { Route, NavLink, Switch } from 'react-router-dom';
class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/new-post" exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={()=><Posts/>}/>
                <Route path="/new-post" exact render={()=><h1><NewPost /></h1>}/>*/}
                <Switch><Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" exact component={FullPost} /></Switch>
            </div>
        );
    }
}

export default Blog;
