import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import getAssetIds from "../../recoil/assets/getAssetIds";
import selectedAssetAtom from "../../recoil/selectedAsset";
import { defaultValue } from "../../recoil/selectedAsset/atom";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function () {
  const assetIds = useRecoilValue(getAssetIds);
  const [selectedAsset, setSelectedAsset] = useRecoilState(selectedAssetAtom);

  return (
    <Autocomplete
      loading
      freeSolo
      value={selectedAsset}
      onChange={(event: any, newValue) => {
        if (newValue) {
          setSelectedAsset(newValue);
        } else {
          // clear event
          setSelectedAsset(defaultValue);
        }
      }}
      options={assetIds}
      renderInput={(params) => <TextField {...params} label='Asset' />}
    />
  );
}
