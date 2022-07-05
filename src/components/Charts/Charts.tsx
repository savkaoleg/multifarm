import React from "react";

import { useRecoilValue } from "recoil";
import selectedAssetAtom from "../../recoil/selectedAsset";
import assetQuery from "../../recoil/assetQuery/selector";

import Grid from "@mui/material/Grid";
import AssetAPR from "./AssetAPR";
import AssetTVL from "./AssetTVL";
import ChartWrap from "./ChartWrap";
import Title from "./Title";

export default function Charts() {
  const selectedAsset = useRecoilValue(selectedAssetAtom);
  const assetDetails = useRecoilValue(assetQuery(selectedAsset));

  return (
    <>
      <Title>{selectedAsset}</Title>
      <Grid
        container
        sx={{
          height: "100%",
        }}
      >
        <ChartWrap>
          <AssetAPR aprHistory={assetDetails.aprHistory} />
        </ChartWrap>
        <ChartWrap>
          <AssetTVL tvlStakedHistory={assetDetails.tvlStakedHistory} />
        </ChartWrap>
      </Grid>
    </>
  );
}
