import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import BasePage from "../BasePage";

export default function(Component) {
  return class withAuth extends React.Component {
    static async getInitialProps(args) {
      //basically saying if the current rendered page has getInitialProps method,
      //then run the function with the arguments mostly context or ctx
      const pageProps =
        (await Component.getInitialProps) &&
        (await Component.getInitialProps(args));

      return { ...pageProps };
    }

    renderProtectedPage = () => {
      if (this.props.auth.isAuthenticated) {
        return <Component {...this.props} />;
      } else {
        return (
          <BaseLayout {...this.props.auth} t>
            <BasePage>
              <h1>You are not logged in</h1>
            </BasePage>
          </BaseLayout>
        );
      }
    };
    render() {
      return this.renderProtectedPage();
    }
  };
}
