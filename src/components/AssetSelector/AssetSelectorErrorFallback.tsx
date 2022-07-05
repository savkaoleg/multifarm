import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function () {
  return (
    <Autocomplete
      disabled
      options={[]}
      renderInput={(params) => <TextField {...params} label='Not found' />}
    />
  );
}
