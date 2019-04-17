import { Fragment } from "react";

import auth0Client from "../../services/Auth0";

const ProtectedLayout = props => {
  console.log(props);
  if (true) {
    return <Fragment>{props.children}</Fragment>;
  } else {
    return <h3>You need to </h3>;
  }
};

export default ProtectedLayout;
