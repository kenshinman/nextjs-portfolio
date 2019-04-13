import { Fragment } from "react";
import Header from "../Header";

const BaseLayout = props => (
  <Fragment>
    <Header />
    {props.children}
  </Fragment>
);

export default BaseLayout;
