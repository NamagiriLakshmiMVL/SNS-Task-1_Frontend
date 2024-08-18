import React from "react";
import PersonAddAlt1SharpIcon from "@mui/icons-material/PersonAddAlt1Sharp";
import MasksSharpIcon from "@mui/icons-material/MasksSharp";
import MedicationLiquidSharpIcon from "@mui/icons-material/MedicationLiquidSharp";
import SensorOccupiedSharpIcon from "@mui/icons-material/SensorOccupiedSharp";
import { Box, Typography } from "@mui/material";

const Boxes = () => {
  let arr = [
    {
      icon: <PersonAddAlt1SharpIcon fontSize="large" />,
      title: "Total Patients",
      number: 9876,
    },
    {
      icon: <MasksSharpIcon fontSize="large" />,
      title: "Patients Admitted",
      number: 5000,
    },
    {
      icon: <MedicationLiquidSharpIcon fontSize="large" />,
      title: "Patients Discharged",
      number: 3567,
    },
    {
      icon: <SensorOccupiedSharpIcon fontSize="large" />,
      title: "Total Staffs",
      number: 9876,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "20px",
      }}
    >
      {arr.map((val) => (
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            backgroundColor: "darkgray",
            borderRadius: "5px",
            width: "15em",
            padding: "20px",
          }}
        >
          {val.icon}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6">{val.number}</Typography>
            <Typography variant="h6">{val.title}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Boxes;
