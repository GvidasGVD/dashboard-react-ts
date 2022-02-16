import classes from "./PersonnelWidget.module.css";
import { MdOutlineVisibility } from "react-icons/md";

export default function PersonnelWidget() {
  return (
    <div className={classes.widget}>
      <span className={classes.widget_title}>New Members</span>
      <ul className={classes.widget_list}>
        <li className={classes.widget_list_item}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={classes.widget_img}
          />
          <div className={classes.widget_user}>
            <span className={classes.widget_username}>Anna Keller</span>
            <span className={classes.widget_user_title}>Software Engineer</span>
          </div>
          <button className={classes.widget_button}>
            <MdOutlineVisibility className={classes.widget_icon} />
            Display
          </button>
        </li>
        <li className={classes.widget_list_item}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={classes.widget_img}
          />
          <div className={classes.widget_user}>
            <span className={classes.widget_username}>Anna Keller</span>
            <span className={classes.widget_user_title}>Software Engineer</span>
          </div>
          <button className={classes.widget_button}>
            <MdOutlineVisibility className={classes.widget_icon} />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}