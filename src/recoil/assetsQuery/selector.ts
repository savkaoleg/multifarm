import { selector } from "recoil";
import ky from "ky";
import { infinitySupport } from "../helper";
import { Asset } from "../../types/Asset";

const url =
  "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000";

const apiDataQuery = selector<Asset[]>({
  key: "assets",
  get: async () => {
    const response = await ky(url, {
      timeout: 60 * 1000,
    });

    let json;
    try {
      let text = await response.text();
      json = infinitySupport(text);
    } catch (e) {
      throw e;
    }

    return json.data;
  },
});

export default apiDataQuery;
