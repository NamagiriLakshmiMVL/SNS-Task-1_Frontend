import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const BarCharts = () => {
  return (
    <BarChart
      sx={{ marginTop: "50px", paddingLeft: "140px" }}
      xAxis={[
        {
          scaleType: "band",
          data: [
            "Week 10",
            "Week 11",
            "Week 12",
            "Week 13",
            "Week 14",
            "Week 15",
            "Week 16",
          ],
        },
      ]}
      series={[
        {
          data: [9000, 10000, 11000, 12500, 11000, 12300, 12500, 11000],
          label: "Total Patients",
        },
        {
          data: [8670, 8500, 9300, 8250, 8000, 7889, 8250, 8000],
          label: "Inpatients",
        },
        {
          data: [1540, 1300, 1700, 2750, 2000, 3770, 1300, 1700],
          label: "Outpatients",
        },
      ]}
      width={900}
      height={400}
    />
  );
};

export default BarCharts;
