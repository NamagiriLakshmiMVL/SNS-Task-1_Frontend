import React from "react";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { Box, Typography } from "@mui/material";

const SparkLines = () => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          border: "1px solid gray",
          padding: "15px",
          textAlign: "left",
        }}
      >
        <Typography variant="h6">Patient's Growth/Week</Typography>
        <SparkLineChart
          plotType="bar"
          data={[2, 3, 1, 5, 6, 7, 5, 7]}
          height={300}
          width={400}
        />
      </Box>
    </div>
  );
};

export default SparkLines;
