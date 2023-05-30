import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      Home <Link to="/articles">Articles</Link> Topics
    </nav>
  );
}

export default Nav;
