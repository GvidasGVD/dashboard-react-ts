import React from 'react';
import classes from "./Chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart: React.FC<{title: string, data: any[], dataKey: string, grid: any}> = (props) =>{
  return (
    <div className={classes.chart}>
      <h3 className={classes.chart_title}>{props.title}</h3>
      <ResponsiveContainer width="100%" aspect={5 / 1}>
        <LineChart data={props.data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={props.dataKey} stroke="#5550bd" />
          <Tooltip />
          {props.grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart