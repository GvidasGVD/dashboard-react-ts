import React from "react";
import classes from "./MainNavigation.module.css";
// import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
const MainNavigation = () => {
  return (
    <header className={classes.topbarWrapper}>
      <div className={classes.topLeft}>
        <span className={classes.logo}>GP Dashboard</span>
        <a
          className={classes.linkToGit}
          href="https://github.com/GvidasGVD"
          target="_blank"
          rel="noopener noreferrer"
          title="See code in GitHub"
        >
          <BsGithub size='1.5rem'/>
        </a>
      </div>
      <div className={classes.topRight}>
        <img
          src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className={classes.topAvatar}
        />
      </div>
    </header>
  );
};

export default MainNavigation;
