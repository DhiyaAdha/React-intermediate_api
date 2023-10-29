import React, { Component, Fragment } from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    }
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

  handleFormChange = (event) => {
    // console.log("Form Change", event.target);
    let formBlogPostNew = { ...this.state.formBlogPost };
    formBlogPostNew[event.target.value] = event.target.value;
    let title = event.target.value;
    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        console.log("value obj formBlogPost", this.state.formBlogPost);
      }
    );
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
            <div className="form-add-post">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                placeholder="add title"
                onChange={this.handleFormChange}
              />
              <label htmlFor="body">Blog Content</label>
              <textarea
                type="text"
                name="body"
                id="body"
                cols="30"
                rows="10"
                placeholder="add blog content"
                onChange={this.handleFormChange}></textarea>
              <button className="btn-submit">Simpan</button>
            </div>
            {this.state.post.map((post) => {
              return (
                <Post
                  data={post}
                  key={post.id}
                  title={post.title}
                  body={post.author}
                  remove={this.handleRemove}
                />
              );
            })}
          </Fragment>
        );
            
    }
}

export default BlogPost;