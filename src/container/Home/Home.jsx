import React, { Component } from "react";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {

    render() {
        return (
            <div>
            <p>Blog Post</p>
            <hr />
            <BlogPost />
            </div>
        )
    }

}

export default Home;