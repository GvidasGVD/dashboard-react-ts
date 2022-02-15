import React from "react";
import { Fragment } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Sidebar from "./Sidebar";

const Layout: React.FC = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.container}>
        <Sidebar />
        <main className={classes.main}>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
