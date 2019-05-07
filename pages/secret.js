import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";

class Secret extends React.Component {
  static getInitialProps() {
    const superValue = " Super Value";
    return { superValue };
  }

  render() {
    return (
      <BaseLayout {...this.props.auth} t>
        <BasePage>
          <h1>Welcome to Secret Page</h1>
          <h3>Some secret content.</h3>
          <h2>{this.props.superValue}</h2>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Secret);
