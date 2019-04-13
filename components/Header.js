import Link from "next/link";

const Header = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/cv">
      <a>CV</a>
    </Link>
    <Link href="/portfolio">
      <a>Portfolio</a>
    </Link>
  </nav>
);

export default Header;
