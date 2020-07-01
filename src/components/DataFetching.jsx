import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  // const [posts, setposts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [buttonId, setButtonId] = useState(1);

  useEffect(() => {
    async function getData() {
      await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
        .then(({ data }) => {
          setPost(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, [buttonId]);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleClick = () => {
    setButtonId(id);
  };

  return (
    <div>
      <input type='text' value={id} onChange={handleChange} />
      <button onClick={handleClick}>Fetch data</button>
      <ul>
        {/* {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })} */}
        {post.title}
      </ul>
    </div>
  );
}

export default DataFetching;
