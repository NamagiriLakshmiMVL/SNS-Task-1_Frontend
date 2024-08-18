import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const Tables = () => {
  let arr = [
    { division: "General Ward", inpatient: "200", outpatient: "126" },
    { division: "ENT", inpatient: "67", outpatient: "23" },
    { division: "Cardiology", inpatient: "23", outpatient: "67" },
    { division: "Neurology", inpatient: "45", outpatient: "23" },
    { division: "Physiotherapy", inpatient: "30", outpatient: "12" },
    { division: "Radiology", inpatient: "25", outpatient: "12" },
  ];
  return (
    <div style={{ paddingLeft: "20px", width: "50%" }}>
      <Table sx={{ width: "55%" }} size="small" aria-label="a dense table">
        <TableHead>
          <Typography
            sx={{ textAlign: "center", padding: "15px" }}
            variant="h6"
          >
            Patients by Division
          </Typography>
          <TableRow>
            <TableCell>Division</TableCell>
            <TableCell>Inpatient</TableCell>
            <TableCell>Outpatient</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row) => (
            <TableRow key={row.division}>
              <TableCell component="th" scope="row">
                {row.division}
              </TableCell>
              <TableCell align="right">{row.inpatient}</TableCell>
              <TableCell align="right">{row.outpatient}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tables;
