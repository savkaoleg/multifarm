import { selector } from "recoil";
import assetsSelector from "../assetsQuery/selector";

const getAssetIds = selector({
  key: "assetsIds",
  get: ({ get }) => {
    const assets = get(assetsSelector);

    return assets.map((asset) => {
      return asset.assetId;
    });
  },
});

export default getAssetIds;
