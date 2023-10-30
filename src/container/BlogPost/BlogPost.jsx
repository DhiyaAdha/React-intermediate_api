import React, { Component, Fragment } from "react";
import "./BlogPost.css";
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
    },
      isUpdate: false,
  };

  getFecthAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          post: json,
        });
      });
  };

  getPostAPI = () => {
    axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then((res) => {
      // console.log(res.data);
      this.setState({
        post: res.data,
      });
    });
  };

  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        // untuk render data yang baru ditambahkan  
        this.getPostAPI();
      },
      (err) => {
        console.error("Error: ", err);
      }
    );
  };

  putDataToAPI = () => {
    axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
      .then((res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        })
      });
  }

  handleRemove = (data) => {
    console.log(data);
    axios
      .delete(`http://localhost:3004/posts/${data}`)
      .then((res) => {
        // console.log(res);
        this.getPostAPI();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };


  handleFormChange = (event) => {
    // console.log("Form Change", event.target);
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      // update id
      formBlogPostNew["id"] = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if(this.state.isUpdate){
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

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
            value={this.state.formBlogPost.title}
          />
          <label htmlFor="body">Blog Content</label>
          <textarea
            type="text"
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder="add blog content"
            onChange={this.handleFormChange}
            value={this.state.formBlogPost.body}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map((post) => {
          return (
            <Post
              data={post}
              key={post.id}
              title={post.title}
              body={post.author}
              remove={this.handleRemove}
              update={this.handleUpdate}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
