import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import classes from "./Home.module.css";
import { userData } from "../../../src/dummyData";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className={classes.home}>
      <FeaturedInfo />
      <Chart data={userData} title="Users Analytics" grid dataKey="Active Users"/>
      {/* <div className={classes.home_widgets}> */}
        {/* <WidgetSm/>
        <WidgetLg/> */}
      {/* </div> */}
    </div>
  );
}