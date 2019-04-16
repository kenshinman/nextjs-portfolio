import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import axios from "axios";
import { Link } from "../routes";

const Blogs = props => {
  const renderPosts = () => {
    return props.posts.map(post => {
      return (
        <li key={post.id}>
          <Link route={`/post/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  };
  return (
    <BaseLayout>
      <BasePage>
        <h2>Blog Posts</h2>
        <ul>{props.posts && renderPosts()}</ul>
      </BasePage>
    </BaseLayout>
  );
};

Blogs.getInitialProps = async () => {
  let data = {};
  try {
    let posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    data.posts = posts.data.splice(0, 10);
  } catch (error) {
    data.error = "something went swong";
  }
  return data;
};

export default Blogs;
