import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Widgets } from "../components/Widgets";
const moment = require("moment");

export default function App() {
  const [posts, setPosts] = React.useState([]);
  const [postIDs, setPostIDs] = React.useState([]);

  React.useEffect(() => {
    const creds = {
      limit: 3,
      app: "2dc26aa8-ebe0-4c3a-a43d-8f68123aaa65",
      client: "a9efbd45-9242-4840-ab37-a4ef5fd468ab",
    };

    if (!postIDs[0]) {
      axios
        .post("https://api.objectpress.co/content/get-all", creds)
        .then((res) => {
          setPosts(res.data.map((x) => x.post));
          setPostIDs(res.data.map((x) => x.postID));
        })
        .catch((err) => console.log(err));
    }
  }, [postIDs]);

  const renderPosts = () => {
    const post = posts.map((content, key) => {
      return (
        <div className="card mb-4" key={key}>
          <img
            className="card-img-top"
            src={content.images[0]}
            alt={content.title}
          />
          <div className="card-body">
            <h2 className="card-title">{content.title}</h2>
            <p className="card-text">{content.summary}</p>
            <Link to={`post/${postIDs[key]}`} className="btn btn-primary">
              Read More &rarr;
            </Link>
          </div>
          <div className="card-footer text-muted">
            Posted on{" "}
            {moment(content.publishDate, "MM/DD/YYYY").format("MMMM DD, YYYY")}{" "}
            by <Link to="/">{content.author}</Link>
          </div>
        </div>
      );
    });
    return post;
  };

  return (
    <div className="bg-primary content">
      {/* Page Content */}
      <div className="container">
        <div className="row">
          {/* Blog Entries Column */}
          <div className="col-md-8">
            <div className="text-light my-4">
              <h1>My Blog</h1>
              <h5>Hipster Ipsum</h5>
            </div>

            {/* Blog Posts */}
            {posts && renderPosts()}
          </div>

          {/* Widgets */}
          <Widgets />
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
}
