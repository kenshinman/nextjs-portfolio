import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

const Cv = props => {
  return (
    <BaseLayout {...props.auth} t>
      <BasePage>
        <h1>I am a secret page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Cv;
