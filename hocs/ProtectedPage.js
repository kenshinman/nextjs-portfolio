import React from "react";

function AuthWrapper(Component) {
  return class ProtectedPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      console.log(Component);
      return <Component data={{ isAuthenticated: true }} {...this.props} />;
    }
  };
}

export default AuthWrapper;
