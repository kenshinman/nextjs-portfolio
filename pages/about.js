import BaseLayout from "../components/layouts/BaseLayout";
import { Container } from "reactstrap";
import BasePage from "../components/BasePage";

const About = props => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>Welcome About</h1>
        <h3>Sub titles</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sit
          dolorum quas necessitatibus esse exercitationem repellat quos
          doloremque eum debitis, unde sequi quam molestiae! Minima optio
          sapiente soluta cumque dignissimos.
        </p>
        <p>
          Molestiae suscipit atque deserunt qui reprehenderit aut pariatur vel
          nobis inventore numquam, alias aliquid cumque harum debitis deleniti
          nulla incidunt voluptatibus maiores odio! Cumque in magni dicta
          incidunt obcaecati! Eaque!
        </p>
        <p>
          Molestias dignissimos amet unde aspernatur, tempore corporis et,
          architecto iure laboriosam culpa alias, dicta aut officiis dolorum
          cumque. Rem id reprehenderit harum eius delectus quasi cupiditate odit
          veritatis eum magni?
        </p>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
