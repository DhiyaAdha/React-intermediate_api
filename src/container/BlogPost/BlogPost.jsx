import React, { Component, Fragment } from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";

class BlogPost extends Component {
    render() {
        return (
          <Fragment>
            <p className="section-title">Blog Post</p>
            <Post />
          </Fragment>
        );
            
    }
}

export default BlogPost;