import Header from "../Header";

const BaseLayout = props => {
  console.log(props);
  return (
    <div className="layout-container">
      <Header isAuthenticated={props.isAuthenticated} />
      <main className={`cover ${props.className}`}>
        <div className="wrapper">{props.children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
