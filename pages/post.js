import BaseLayout from "../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

import "../styles/style.scss";

const Post = props => {
  // console.log(props);
  return (
    <BaseLayout>
      <div>
        <h1 className="title">Post Page</h1>
        <h3>{props.post.title}</h3>
        <p>{props.post.body}</p>
        <h3>{props.router.query.id}</h3>
      </div>
    </BaseLayout>
  );
};

Post.getInitialProps = async ({query}) => {
  let data = {};
  const id = query.id;
  try {
    let post = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    data.post = post.data;
  } catch (error) {
    data.error = "something went swong";
  }
  // debugger;
  return data;
};

export default withRouter(Post);
