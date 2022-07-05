import { atom } from "recoil";
import recoilPersist from "../recoilPersist";
import { Asset } from "../../types/Asset";

export const defaultValue = "";

const selectedAsset = atom<string | Asset["assetId"]>({
  key: "selectedAsset",
  default: defaultValue,
  effects: [recoilPersist()],
});

export default selectedAsset;
