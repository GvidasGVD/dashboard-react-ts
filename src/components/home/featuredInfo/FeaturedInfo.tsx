import classes from "./FeaturedInfo.module.css";
// import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import FeaturedItem from "./FeaturedItem"

export default function FeaturedInfo() {
  return (
    <div className={classes.featured}>
      <FeaturedItem  title="Profit" moneyAmount={2415} progress={-15}/>
      <FeaturedItem  title="Sales" moneyAmount={4561} progress={-1.4}/>
      <FeaturedItem  title="Future orders" moneyAmount={3215} progress={5}/>
      {/* <div className={classes.featured_item}>
        <span className={classes.featured_title}>Revenue</span>
        <div className={classes.featured_money_container}>
          <span className={classes.featured_money}>$2,415</span>
          <span className={classes.featured_moneyRate}>
            -11.4 <MdArrowDownward  className={`${classes.featured_icon} ${classes.negative}`}/>
          </span>
        </div>
        <span className={classes.featuredSub}>Compared to previous month</span>
      </div> */}
      {/* <div className={classes.featured_item}>
        <span className={classes.featured_title}>Sales</span>
        <div className={classes.featured_money_container}>
          <span className={classes.featured_money}>$4,415</span>
          <span className={classes.featured_moneyRate}>
            -1.4 <MdArrowDownward className={`${classes.featured_icon} ${classes.negative}`}/>
          </span>
        </div>
        <span className={classes.featuredSub}>Compared to previous month</span>
      </div>
      <div className={classes.featured_item}>
        <span className={classes.featured_title}>Future orders</span>
        <div className={classes.featured_money_container}>
          <span className={classes.featured_money}>$2,225</span>
          <span className={classes.featured_moneyRate}>
            +2.4 <MdArrowUpward className={classes.featured_icon}/>
          </span>
        </div>
        <span className={classes.featuredSub}>Compared to previous month</span>
      </div> */}
    </div>
  );
}