import BaseLayout from "../components/layouts/BaseLayout";
import { Link } from "../routes";
import axios from "axios";

import "../styles/style.scss";

const Index = ({ posts, name }) => {
  const renderPosts = () => {
    return posts.map(post => {
      return (
        <li key={post.id}>
          <Link route={`/post/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      );
    });
  };
  return (
    <BaseLayout>
      <div>
        <h1 className="title">Welcome Home {name}</h1>
        <h3>Posts</h3>

        <ul>{renderPosts()}</ul>
      </div>
    </BaseLayout>
  );
};

Index.getInitialProps = async () => {
  let data = {};
  try {
    let posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    data.posts = posts.data.splice(0, 10);
  } catch (error) {
    data.error = "something went swong";
  }
  return data;
};

export default Index;
