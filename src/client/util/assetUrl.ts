import config from "../../common/config.ts";

export default function assetUrl(asset: string): string {
  return config.assetBaseUrl === "/" ? `${config.assetBaseUrl}${asset}` : `${config.assetBaseUrl}/${asset}`;
}
