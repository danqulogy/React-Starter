import React from "react";
import axios from "axios";

export default function Pagination(props) {
  const [next, setNext] = React.useState([]);

  React.useEffect(() => {
    const creds = {
      app: "2dc26aa8-ebe0-4c3a-a43d-8f68123aaa65",
      client: "a9efbd45-9242-4840-ab37-a4ef5fd468ab",
    };

    if (!next[0]) {
      axios
        .post("https://api.objectpress.co/content/get-all", creds)
        .then((res) => {
          setNext(res.data.map((x) => x.postID));
        })
        .catch((err) => console.log(err));
    }
  }, [next]);

  return (
    <ul className="pagination justify-content-center mb-4">
      <li className="page-item">
        <a
          className="page-link"
          href={next[next.indexOf(props.currentPost) + 1]}
        >
          &larr; Older
        </a>
      </li>
      <li className="page-item">
        <a
          className="page-link"
          href={next[next.indexOf(props.currentPost) - 1]}
        >
          Newer &rarr;
        </a>
      </li>
    </ul>
  );
}
