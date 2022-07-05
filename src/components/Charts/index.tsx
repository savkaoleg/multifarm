import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { useRecoilValue } from "recoil";
import selectedAssetAtom from "../../recoil/selectedAsset";
import { defaultValue } from "../../recoil/selectedAsset/atom";

import Title from "./Title";
import Charts from "./Charts";
import ChartsErrorFallback from "./ChartsErrorFallback";
import AssetSelector from "../AssetSelector";
import CircularIndeterminate from "../CircularIndeterminate";

export default function () {
  const selectedAsset = useRecoilValue(selectedAssetAtom);

  return (
    <>
      <AssetSelector />
      {defaultValue === selectedAsset && (
        <Title>{"Please select asster"}</Title>
      )}
      {defaultValue !== selectedAsset && (
        <ErrorBoundary
          FallbackComponent={ChartsErrorFallback}
          resetKeys={[selectedAsset]}
        >
          <Suspense fallback={<CircularIndeterminate />}>
            <Charts />
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  );
}
