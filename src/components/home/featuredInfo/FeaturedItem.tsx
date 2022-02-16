import React from 'react'
import classes from "./FeaturedItem.module.css"
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
const FeaturedItem: React.FC<{title: string, moneyAmount: number, progress: number}> = (props) => {
  return (
    <div className={classes.featured_item}>
        <span className={classes.featured_title}>{props.title}</span>
        <div className={classes.featured_money_container}>
          <span className={classes.featured_money}>${props.moneyAmount.toLocaleString()}</span>
          <span className={classes.featured_money_rate} title="Compared to previous month">
          {props.progress}% {props.progress < 0 ? <MdArrowDownward  className={`${classes.featured_icon} ${classes.negative}`}/> : <MdArrowUpward  className={`${classes.featured_icon}`}/>}
          </span>
        </div>
        <span className={classes.featuredSub}>Of this month</span>
      </div>
  )
}

export default FeaturedItem