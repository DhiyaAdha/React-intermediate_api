import React, { Component, Fragment } from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: []
  }

  componentDidMount() {
    // fecth API
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json
    //     })
    //   })

    // axios
    axios
      .get("http://localhost:3004/posts")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          post: res.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    
  }
    render() {
        return (
          <Fragment>
            <p className="section-title">Blog Post</p>
            {
              this.state.post.map(post => {
              return <Post key={post.id} title={post.title} desc={post.author} />;
              })
            }
          </Fragment>
        );
            
    }
}

export default BlogPost;