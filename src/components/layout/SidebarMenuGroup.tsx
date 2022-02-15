import React from "react";
import classes from "./SidebarMenuGroup.module.css";

const SidebarMenuGroup: React.FC<{ title: string }> = (props) => {
  return (
    <div className={classes.sidebarMenu}>
      <h3 className={classes.sidebarTitle}>{props.title}</h3>
      <ul className={classes.sidebarList}>{props.children}</ul>
    </div>
  );
};

export default SidebarMenuGroup;
