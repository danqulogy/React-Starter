import React from "react";
import axios from "axios";
import { Widgets } from "../components/Widgets";
import Pagination from "../components/Pagination";
const moment = require("moment");

export default function Posts(props) {
  const [posts, setPosts] = React.useState([]);
  const [postID] = React.useState(props.match.params.id);

  React.useEffect(() => {
    const creds = {
      post: postID,
      app: "2dc26aa8-ebe0-4c3a-a43d-8f68123aaa65",
    };

    if (!posts.title) {
      axios
        .post("https://api.objectpress.co/content/search", creds)
        .then((res) => {
          setPosts(res.data[0].post);
        })
        .catch((err) => console.log(err));
    }
  }, [posts, postID]);

  return (
    <div className="bg-primary content">
      {/* Page Content */}
      <div className="container">
        <div className="row">
          {/* Post Content Column */}

          <div className="text-light col-lg-8">
            {/* Title */}
            {posts.title && (
              <div>
                <h1 className="mt-4">{posts.title}</h1>

                {/* Author */}
                <p className="lead">by {posts.author}</p>

                <hr />

                {/* Date/Time */}
                <p>
                  Posted on{" "}
                  {moment(posts.publishDate, "MM/DD/YYYY").format(
                    "MMMM DD, YYYY"
                  )}
                </p>

                <hr />

                {/* Preview Image */}
                <img
                  className="img-fluid rounded"
                  src={posts.images}
                  alt={posts.title}
                />

                <hr />

                {/* Post Content */}
                <p>{posts.details}</p>

                <hr />

                {/* Pagination */}
                <Pagination currentPost={postID} />
              </div>
            )}
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
