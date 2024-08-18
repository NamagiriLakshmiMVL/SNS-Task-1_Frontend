import "./App.css";
import Boxes from "./components/Boxes";
import Gauges from "./components/Gauge";
import BarCharts from "./components/LineCharts";
import Navbar from "./components/Navbar";
import Piecharts from "./components/Piecharts";
import SparkLines from "./components/SparkLines";
import Tables from "./components/Table";

function App() {
  return (
    <div>
      <Navbar />
      <Boxes />
      <div style={{ display: "flex", alignItems: "center" }}>
        <BarCharts />
        <Piecharts />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        <Tables />
        <Gauges />
        <SparkLines />
      </div>
    </div>
  );
}

export default App;
