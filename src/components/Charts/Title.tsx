import React from "react";
import Typography from "@mui/material/Typography";

export default function Title({ children }) {
  return (
    <Typography component='h3' variant='h4' align='center' mt={2} mb={2}>
      {children}
    </Typography>
  );
}
