import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

const Cv = props => {
  return (
    <BaseLayou {...props.auth} t>
      <BasePage>
        <h1>Welcome CV</h1>
      </BasePage>
    </BaseLayou>
  );
};

export default Cv;
