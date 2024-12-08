import Smx, { PaletteCollectionFactory } from "genie-smx";
import { Buffer } from "buffer";

export async function downloadAssets(assetPath: string): Promise<{ id: string; smx: Smx }[]> {
  const palettes = await PaletteCollectionFactory.fromHttp(`${assetPath}/palettes`);
  return await Promise.all(
    allAssets.map((assetId) =>
      fetch(`${assetPath}/${assetId}.smx`)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => ({
          id: assetId,
          smx: new Smx(new Buffer(arrayBuffer), palettes),
        })),
    ),
  );
}

export const playerAssets = [
  "units/u_arc_crossbowman_attackA_x1",
  "units/u_arc_crossbowman_deathA_x1",
  "units/u_arc_crossbowman_decayA_x1",
  "units/u_arc_crossbowman_idleA_x1",
  "units/u_arc_crossbowman_walkA_x1",

  "units/u_sie_mangonel_attackA_x1",
  "units/u_sie_mangonel_deathA_x1",
  "units/u_sie_mangonel_decayA_x1",
  "units/u_sie_mangonel_idleA_x1",
  "units/u_sie_mangonel_walkA_x1",

  "units/u_monk_west_attackA_x1",
  "units/u_monk_west_deathA_x1",
  "units/u_monk_west_decayA_x1",
  "units/u_monk_west_idleA_x1",
  "units/u_monk_west_walkA_x1",

  "interface/dc_b_misc_waypoint_flag_x1",
];

export const globalAssets = [
  "interface/MOVETO",

  "projectiles/p_mangonel_x1",
  "projectiles/p_arrow_x1",

  "terrain/15001-grass",
  "terrain/15008-grass-2",
  "terrain/15009-grass-dirt",
  // "terrain/15010-desert",
  // "terrain/15019-cobble",
];

export const allAssets = [...playerAssets, ...globalAssets];
