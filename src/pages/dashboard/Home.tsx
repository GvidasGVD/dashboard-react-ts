import Chart from "../../components/home/chart/Chart";
import FeaturedInfo from "../../components/home/featuredInfo/FeaturedInfo";
import classes from "./Home.module.css";
import { userData } from "../../../src/dummyData";
import PersonnelWidget from "../../components/home//widgets/PersonnelWidget";
import UsersWidget from "../../components/home//widgets/UsersWidget";

export default function Home() {
  return (
    <div className={classes.home}>
      <FeaturedInfo />
      <Chart data={userData} title="Active Users" grid dataKey="Active Users"/>
      <div className={classes.home_widgets}>
        <PersonnelWidget/>
        <UsersWidget/>
      </div>
    </div>
  );
}