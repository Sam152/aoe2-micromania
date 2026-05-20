import { Pallet, parsePallet } from "./parsePallet.ts";

const PALETTE_FILES: Record<number, string> = {
  0: "original",
  1: "clf_pal",
  2: "pal_2",
  3: "pal_3",
  4: "pal_4",
  5: "pal_5",
  6: "pal_6",
  16: "b_dark",
  17: "b_orie",
  18: "b_seas",
  19: "b_ceas",
  20: "b_east",
  21: "b_west",
  22: "b_asia",
  23: "b_meso",
  24: "b_slav",
  25: "b_afri",
  26: "b_indi",
  27: "b_medi",
  28: "b_scen",
  29: "b_scen",
  30: "n_trees",
  31: "n_trees",
  40: "n_cliffs",
  41: "effects_2",
  42: "b_scen",
  50: "playercolor_white",
  54: "effects",
  55: "playercolor_blue",
  56: "playercolor_red",
  57: "playercolor_green",
  58: "playercolor_yellow",
  59: "playercolor_orange",
  60: "playercolor_teal",
  61: "playercolor_purple",
  62: "playercolor_grey",
};

export async function downloadPallets(baseUrl: string): Promise<Record<number, Pallet>> {
  const entries = await Promise.all(
    Object.entries(PALETTE_FILES).map(([key, filename]) =>
      fetch(`${baseUrl}/${filename}.pal`)
        .then((r) => r.arrayBuffer())
        .then((buf) => [parseInt(key, 10), parsePallet(new Uint8Array(buf))] as const)
    ),
  );
  return Object.fromEntries(entries);
}
