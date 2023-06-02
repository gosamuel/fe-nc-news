import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./App";

function Nav() {
  const { currentUser } = useContext(UserContext);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      Topics:
      <Link to="/articles/coding">Coding</Link>
      <Link to="/articles/football">Football</Link>
      <Link to="/articles/cooking">Cooking</Link>
      --- Logged in as {currentUser}
    </nav>
  );
}

export default Nav;
