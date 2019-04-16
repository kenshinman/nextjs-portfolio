import BaseLayout from "../components/layouts/BaseLayout";
import { Link } from "../routes";
import axios from "axios";
import Typed from "react-typed";

import { Container, Row, Col } from "reactstrap";
import BasePage from "../components/BasePage";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [
        "Developer",
        "Frontend Developer",
        "Designer",
        "Teacher",
        "Speaker"
      ]
    };
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    console.log(isAuthenticated);
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>

          <BasePage>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-1.png"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Kehinde Orilogbon. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>
                </div>

                <p className="self-typed">
                  I'm a{" "}
                  <Typed
                    loop
                    typeSpeed={80}
                    backSpeed={40}
                    strings={this.state.roles}
                    smartBackspace
                    shuffle={false}
                    backDelay={1}
                    fadeOut={false}
                    fadeOutDelay={100}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                    className="self-typed"
                  />
                </p>
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work.</h1>
                </div>
              </Col>
            </Row>
          </BasePage>
        </div>
      </BaseLayout>
    );
  }
}

Index.getInitialProps = ({ req }) => {
  // console.log(req.headers.cookie.split(";"))
  return {};
};

export default Index;
