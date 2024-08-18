import * as React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import { Typography } from "@mui/material";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

export default function Gauges() {
  return (
    <div
      style={{
        marginLeft: "-350px",
        border: "1px solid gray",
        padding: "10px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ textAlign: "center", marginBottom: "-30px" }}
      >
        Hospital Rating
      </Typography>
      <GaugeContainer
        width={300}
        height={300}
        startAngle={-110}
        endAngle={110}
        value={80}
      >
        <GaugeReferenceArc />
        <GaugeValueArc />
        <GaugePointer />
      </GaugeContainer>
      <Typography variant="h3" sx={{ textAlign: "center", marginTop: "-50px" }}>
        80/100
      </Typography>
    </div>
  );
}
