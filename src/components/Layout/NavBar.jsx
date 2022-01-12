import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/newMeetups">New meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
