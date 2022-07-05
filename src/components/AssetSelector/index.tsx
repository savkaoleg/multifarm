import React, { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import AssetSelectorFallback from "./AssetSelectorFallback";
import AssetSelectorErrorFallback from "./AssetSelectorErrorFallback";
import AssetSelector from "./AssetSelector";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
export default function () {
  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item xs={8}>
        <Typography component='h2' variant='h3'>
          {"Assets"}
        </Typography>
      </Grid>
      <Grid item xs={4} justifyContent='flex-end'>
        <ErrorBoundary FallbackComponent={AssetSelectorErrorFallback}>
          <Suspense fallback={<AssetSelectorFallback />}>
            <AssetSelector />
          </Suspense>
        </ErrorBoundary>
      </Grid>
    </Grid>
  );
}
