import React, { Component, Fragment } from "react";
import './BlogPost.css';

class BlogPost extends Component {
    render() {
        return (
          <Fragment>
            <p className="section-title">Blog Post</p>
            <div className="post">
              <div className="img-thumb">
                <img src="https://picsum.photos/id/6/200/130" alt="dummy" />
              </div>
              <div className="content">
                <p className="title">Dummy Title</p>
                <p className="desc">Dummy Body here</p>
              </div>
            </div>
          </Fragment>
        );
            
    }
}

export default BlogPost;