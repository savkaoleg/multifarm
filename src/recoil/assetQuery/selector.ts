import { selectorFamily } from "recoil";
import ky from "ky";
import { infinitySupport } from "../helper";

import { Asset } from "../../types/Asset";
import { AssetDetails } from "../../types/AssetDetails";

const url =
  "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_asset_details/";

const apiDataQuery = selectorFamily<AssetDetails, Asset["assetId"]>({
  key: "assetDetails",
  get: (assetId) => async () => {
    const response = await ky(`${url}${encodeURI(assetId)}`, {
      timeout: 60 * 1000,
    });

    let json;
    try {
      let text = await response.text();
      json = infinitySupport(text);
    } catch (e) {
      throw e;
    }

    if (json.tvlStakedHistory) {
      json.tvlStakedHistory.reverse();
    }

    if (json.aprHistory) {
      json.aprHistory.reverse();
    }

    return json;
  },
});

export default apiDataQuery;
