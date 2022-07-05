import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function () {
  return (
    <Autocomplete
      loading
      disabled
      options={[]}
      renderInput={(params) => <TextField {...params} label='Loading' />}
    />
  );
}
