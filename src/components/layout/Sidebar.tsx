import React, { Fragment } from "react";
import classes from "./Sidebar.module.css";
import { BiTrendingUp, BiBarChart } from "react-icons/bi";
import {
  MdTimeline,
  MdLineStyle,
  MdOutlinePersonOutline,
  MdOutlineAnalytics,
} from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import SidebarMenuGroup from "./SidebarMenuGroup";
import { RiProductHuntLine, RiSuitcaseLine } from "react-icons/ri";
import { HiDocumentReport } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const dashboardGroup = (
    <SidebarMenuGroup title="Dashboard">
      <NavLink to="/home">
        <li className={`${classes.sidebar_list_item} ${classes.active}`}>
          <MdLineStyle className={classes.sidebar_list_icon} />
          Home
        </li>
      </NavLink>
      <li className={classes.sidebar_list_item}>
        <MdTimeline className={classes.sidebar_list_icon} />
        Analytics
      </li>
      <li className={classes.sidebar_list_item}>
        <BiTrendingUp className={classes.sidebar_list_icon} />
        Sales
      </li>
    </SidebarMenuGroup>
  );

  const quickMenuGroup = (
    <SidebarMenuGroup title="Quick Menu">
      <NavLink to="/users">
        <li className={classes.sidebar_list_item}>
          <MdOutlinePersonOutline className={classes.sidebar_list_icon} />
          Users
        </li>
      </NavLink>
      <li className={classes.sidebar_list_item}>
        <RiProductHuntLine className={classes.sidebar_list_icon} />
        Products
      </li>
      <li className={classes.sidebar_list_item}>
        <FaDollarSign className={classes.sidebar_list_icon} />
        Transactions
      </li>
      <li className={classes.sidebar_list_item}>
        <BiBarChart className={classes.sidebar_list_icon} />
        Reports
      </li>
    </SidebarMenuGroup>
  );

  const staffGroup = (
    <SidebarMenuGroup title="Staff">
      <li className={classes.sidebar_list_item}>
        <RiSuitcaseLine className={classes.sidebar_list_icon} />
        Manage
      </li>
      <li className={classes.sidebar_list_item}>
        <MdOutlineAnalytics className={classes.sidebar_list_icon} />
        Analytics
      </li>
      <li className={classes.sidebar_list_item}>
        <HiDocumentReport className={classes.sidebar_list_icon} />
        Reports
      </li>
    </SidebarMenuGroup>
  );

  return (
    <Fragment>
      <div className={classes.sidebar}>
        <div className={classes.sidebarWrapper}>
          {dashboardGroup}
          {quickMenuGroup}
          {staffGroup}
        </div>
      </div>
    </Fragment>
  );
};

export default SideBar;
