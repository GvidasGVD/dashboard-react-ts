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
      <li className={`${classes.sidebar_list_item} `}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : classes.sidebar_list_item_link)}
          to="dashboard-react-ts/home"
        >
          <MdLineStyle className={classes.sidebar_list_icon} />
          Home
        </NavLink>
      </li>
      <li className={classes.sidebar_list_item}>
      <NavLink
          className={(navData) => (navData.isActive ? classes.active : classes.sidebar_list_item_link)}
          to="dashboard-react-ts/home/analytics"
        >
        <MdTimeline className={classes.sidebar_list_icon} />
        Analytics
        </NavLink>
      </li>
      <li className={classes.sidebar_list_item}>
      <NavLink
          className={(navData) => (navData.isActive ? classes.active : classes.sidebar_list_item_link)}
          to="dashboard-react-ts/home/sales"
        >
        <BiTrendingUp className={classes.sidebar_list_icon} />
        Sales
        </NavLink>
      </li>
    </SidebarMenuGroup>
  );

  const quickMenuGroup = (
    <SidebarMenuGroup title="Quick Menu">
      <li className={classes.sidebar_list_item}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.sidebar_list_item_link
          }
          to="dashboard-react-ts/users"
        >
          <MdOutlinePersonOutline className={classes.sidebar_list_icon} />
          Users
        </NavLink>
      </li>
      <li className={classes.sidebar_list_item}>
      <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.sidebar_list_item_link
          }
          to="dashboard-react-ts/products"
        >
        <RiProductHuntLine className={classes.sidebar_list_icon} />
        Products
        </NavLink>
      </li>
      <li className={classes.sidebar_list_item}>
      <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.sidebar_list_item_link
          }
          to="dashboard-react-ts/transactions"
        >
        <FaDollarSign className={classes.sidebar_list_icon} />
        Transactions
        </NavLink>
      </li>
      <li className={classes.sidebar_list_item}>
      <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.sidebar_list_item_link
          }
          to="dashboard-react-ts/reports"
        >
        <BiBarChart className={classes.sidebar_list_icon} />
        Reports
        </NavLink>
      </li>
    </SidebarMenuGroup>
  );

  const staffGroup = (
    <SidebarMenuGroup title="Staff">
      <li className={classes.sidebar_list_item}>
      <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.sidebar_list_item_link
          }
          to="dashboard-react-ts/staff/manage"
        >
        <RiSuitcaseLine className={classes.sidebar_list_icon} />
        Manage
        </NavLink>
      </li>
      <li className={classes.sidebar_list_item}>
      <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.sidebar_list_item_link
          }
          to="dashboard-react-ts/staff/analytics"
        >
        <MdOutlineAnalytics className={classes.sidebar_list_icon} />
        Analytics
        </NavLink>
      </li>
      <li className={classes.sidebar_list_item}>
      <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.sidebar_list_item_link
          }
          to="dashboard-react-ts/staff/reports"
        >
        <HiDocumentReport className={classes.sidebar_list_icon} />
        Reports
        </NavLink>
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
