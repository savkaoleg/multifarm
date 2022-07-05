import React, { Children } from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function ChartWrap({ children }) {
  return (
    <Grid
      item
      xs={6}
      sx={{
        height: "100%",
        maxHeight: "300px",
        minHeight: "200px",
        padding: "25px",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {children}
      </Paper>
    </Grid>
  );
}
