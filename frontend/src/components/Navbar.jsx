import { Link } from "react-router";

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">Ahmad</Link>

        <div className="nav-links">
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
