import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * #1-Let's do this same example using React hooks.
 * #2-Apply the componentWillUnmount lifecycle method with useEffect hooks.
 */

const App = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const posts = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data);

      setPosts(posts);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    return () => {
      console.log("the component will unmount");
    };
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default App;
/*
class App extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    try {
      const posts = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data);

      this.setState({ posts });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
}

export default App;
*/
