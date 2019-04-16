import { Container } from "reactstrap";

const BasePage = props => {
  const {className, children} = props
  return (
    <Container className={`base-page ${className}`}>
      {children}
    </Container>
  );
};

BasePage.initialProps = {
  className: ''
}

export default BasePage;
