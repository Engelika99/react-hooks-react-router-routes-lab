import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </div>
  );
}

export default NavBar;
