import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

const Portfolio = props => {
  return (
    <BaseLayout {...props.auth}>
      <BasePage>
        <h1>Welcome Portfolio</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
