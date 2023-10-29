import React, { Component, Fragment } from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: []
  }

  getFecthAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          post: json
        })
      })
  }

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          post: res.data,
        });
      })
  }


  handleRemove = (data) => {
    console.log(data);
    axios
      .delete(`http://localhost:3004/posts/${data}`)
      .then((res) => {
        console.log(res);
        this.getPostAPI();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  componentDidMount() {
    // fecth API
    // this.getFecthAPI();

    // axios
    this.getPostAPI();
  }
    render() {
        return (
          <Fragment>
            <p className="section-title">Blog Post</p>
            {
              this.state.post.map(post => {
              return <Post data={post} key={post.id} title={post.title} body={post.author} remove={this.handleRemove} />;
              })
            }
          </Fragment>
        );
            
    }
}

export default BlogPost;