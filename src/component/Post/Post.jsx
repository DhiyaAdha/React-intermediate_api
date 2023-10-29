import React from "react";

const Post = (props) => {
    return (
      <div className="post">
        <div className="img-thumb">
          <img src="https://picsum.photos/id/6/200/130" alt="dummy" />
        </div>
        <div className="content">
          <p className="title">Dummy Title</p>
          <p className="desc">Dummy Body here</p>
        </div>
      </div>
    );
}

export default Post;