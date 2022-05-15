import "./home.css";
import { userData } from "../../../../adminDummyData";
import Chart from "./chart";
import FeaturedInfo from "./featuredInfo";
import WidgetSm from "./widgetSm";
import WidgetLg from "./widgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
