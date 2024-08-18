import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";

const Piecharts = () => {
  return (
    <Box sx={{ padding: "30px", marginRight: "100px", marginTop: "50px" }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        Patients by Category
      </Typography>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 15, label: "General Ward" },
              { id: 1, value: 7, label: "Cardiology" },
              { id: 2, value: 9, label: "ENT" },
              { id: 3, value: 3, label: "Neurology" },
              { id: 4, value: 6, label: "Physiotherapy" },
              { id: 5, value: 10, label: "Radiology" },
            ],
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            cx: 120,
          },
        ]}
        width={400}
        height={200}
      />
    </Box>
  );
};

export default Piecharts;
