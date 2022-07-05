import React from "react";
import Typography from "@mui/material/Typography";

export default function ChartTitle({ title }: { title: string }) {
  return (
    <Typography component='p' variant='h6' align='center' mt={1} mb={1}>
      {title}
    </Typography>
  );
}
