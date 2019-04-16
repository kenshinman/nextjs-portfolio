import { useEffect } from "react";
import auth0Client from "../services/Auth0";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { withRouter } from "next/router";

const Callback = props => {
  const handleAuth = async () => {
    try {
      await auth0Client.handleAuthentication();
      props.router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  //same as cdm,
  useEffect(() => {
    handleAuth();
  }, []);
  return (
    <BaseLayout>
      <BasePage>
        <h1>Verifying login...</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withRouter(Callback);
