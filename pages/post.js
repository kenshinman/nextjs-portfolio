import BaseLayout from "../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

import "../styles/style.scss";

const Post = props => {
  console.log(props);
  return (
    <BaseLayout>
      <div>
        <h1 className="title">Welcome Home</h1>
        <h3>Posts</h3>
        <h3>{props.router.query.title}</h3>
      </div>
    </BaseLayout>
  );
};

// Post.getInitialProps = async () => {
//   let data = {};
//   try {
//     let posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
//     data.posts = posts.data.splice(0, 10);
//   } catch (error) {
//     data.error = "something went swong";
//   }
//   debugger;
//   return data;
// };

export default withRouter(Post);
