import Header from "../Header";

const BaseLayout = props => {
  return (
    <div className="layout-container">
      <Header isAuthenticated={props.isAuthenticated} user={props.user} />
      <main className={`cover ${props.className}`}>
        <div className="wrapper">{props.children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
