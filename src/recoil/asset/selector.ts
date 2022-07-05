import { selectorFamily } from "recoil";
import assetsSelector from "../assetsQuery/selector";
import { Asset } from "../../types/Asset";

const asset = selectorFamily({
  key: "asset",
  get:
    (assetId: Asset["assetId"]) =>
    ({ get }) => {
      const assets = get(assetsSelector);

      const asset = assets.find((asset) => asset.assetId === assetId);

      return asset;
    },
});

export default asset;
