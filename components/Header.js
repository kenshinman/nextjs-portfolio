import { Link } from "../routes";

const Header = () => (
  <nav>
    <Link route="/">
      <a>Home</a>
    </Link>
    <Link route="/about">
      <a>About</a>
    </Link>
    <Link route="/cv">
      <a>CV</a>
    </Link>
    <Link route="/portfolio">
      <a>Portfolio</a>
    </Link>
  </nav>
);

export default Header;
