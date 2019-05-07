import React from "react";
import App, { Container } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.scss";
import auth0Client from "../services/Auth0";

class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};

    const user = process.browser
      ? await auth0Client.clientAuth()
      : await auth0Client.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const auth = {
      user,
      isAuthenticated: user && Object.keys(user).length > 0
    };

    return { pageProps, auth };
  }

  render() {
    const { Component, pageProps, auth } = this.props;
    console.log("auth", auth);
    return (
      <Container>
        <Component {...pageProps} auth={auth} />
      </Container>
    );
  }
}

export default MyApp;
