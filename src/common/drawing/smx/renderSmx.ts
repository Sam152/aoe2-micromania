import { Pallet } from "./parsePallet.ts";
import { Buffer } from "buffer";

const PLAYER_PALETTES: Record<number, number> = {
  1: 55, // blue
  2: 56, // red
  3: 57, // green
  4: 58, // yellow
  5: 60, // cyan
  6: 61, // purple
  7: 62, // grey
  8: 59, // orange
};

type Frame = {
  shadow: ImageBitmap | null;
  shadowCenterX: number;
  shadowCenterY: number;
  renders: Record<number, ImageBitmap>;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
};

type RenderSmxArgs = {
  data: Buffer;
  palettes: Record<number, Pallet>;
  playersToRender: number[];
};

type ParsedMainLayer = {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  paletteNumber: number;
  leftSpacings: Int16Array;
  rightSpacings: Int16Array;
  commandData: Uint8Array;
  pixelIndices: Uint16Array;
};

type ParsedShadowLayer = {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  leftSpacings: Int16Array;
  rightSpacings: Int16Array;
  commandBuffer: Uint8Array;
};

type ParsedFrame = {
  mainLayer: ParsedMainLayer;
  shadowLayer: ParsedShadowLayer | null;
};

// Flatten a Palette into a Uint32Array of packed little-endian RGBA values.
// preMultAlpha: multiply RGB by alpha/255 before packing (for base layer Draw command).
// Undefined/null entries default to opaque black.
function flattenPalette(palette: any[], preMultAlpha: boolean): Uint32Array {
  const flat = new Uint32Array(1024); // 10-bit palette index space
  flat.fill(0xFF000000); // default: opaque black
  const len = palette ? palette.length : 0;
  for (let i = 0; i < len && i < 1024; i++) {
    const c = palette[i];
    if (!c) { continue; }
    const a = c[3] ?? 255;
    const r = preMultAlpha ? Math.round(c[0] * a / 255) : c[0];
    const g = preMultAlpha ? Math.round(c[1] * a / 255) : c[1];
    const b = preMultAlpha ? Math.round(c[2] * a / 255) : c[2];
    // little-endian: byte 0 = R, byte 1 = G, byte 2 = B, byte 3 = 255 (alpha always opaque in output)
    flat[i] = (r & 0xFF) | ((g & 0xFF) << 8) | ((b & 0xFF) << 16) | (255 << 24);
  }
  return flat;
}

function readRowEdges(
  view: DataView,
  offset: number,
  height: number,
): { leftSpacings: Int16Array; rightSpacings: Int16Array; nextOffset: number } {
  const leftSpacings = new Int16Array(height);
  const rightSpacings = new Int16Array(height);
  for (let i = 0; i < height; i++) {
    leftSpacings[i] = view.getInt16(offset, true);
    rightSpacings[i] = view.getInt16(offset + 2, true);
    offset += 4;
  }
  return { leftSpacings, rightSpacings, nextOffset: offset };
}

function parseMainLayerData(
  view: DataView,
  dataOffset: number,
  width: number,
  height: number,
  centerX: number,
  centerY: number,
  paletteNumber: number,
): ParsedMainLayer {
  let offset = dataOffset;

  const { leftSpacings, rightSpacings, nextOffset: afterEdges } = readRowEdges(view, offset, height);
  offset = afterEdges;

  const commandArrayLength = view.getUint32(offset, true);
  offset += 4;
  const pixelDataArrayLength = view.getUint32(offset, true);
  offset += 4;

  const commandData = new Uint8Array(view.buffer, view.byteOffset + offset, commandArrayLength);
  offset += commandArrayLength;

  // Pre-expand packed 10-bit pixel indices: every 5 bytes encodes 4 indices
  // (4 × 8-bit low bytes + 1 byte holding 4 × 2-bit high parts).
  const groupCount = Math.floor(pixelDataArrayLength / 5);
  const pixelIndices = new Uint16Array(groupCount * 4);
  const pixelData = new Uint8Array(view.buffer, view.byteOffset + offset, pixelDataArrayLength);
  for (let base = 0, pi = 0; base < groupCount * 5; base += 5, pi += 4) {
    const hi = pixelData[base + 4];
    pixelIndices[pi] = pixelData[base] | ((hi & 0x03) << 8);
    pixelIndices[pi + 1] = pixelData[base + 1] | (((hi >> 2) & 0x03) << 8);
    pixelIndices[pi + 2] = pixelData[base + 2] | (((hi >> 4) & 0x03) << 8);
    pixelIndices[pi + 3] = pixelData[base + 3] | (((hi >> 6) & 0x03) << 8);
  }

  return { width, height, centerX, centerY, paletteNumber, leftSpacings, rightSpacings, commandData, pixelIndices };
}

function parseShadowLayerData(
  view: DataView,
  dataOffset: number,
  width: number,
  height: number,
  centerX: number,
  centerY: number,
): ParsedShadowLayer {
  let offset = dataOffset;

  const { leftSpacings, rightSpacings, nextOffset: afterEdges } = readRowEdges(view, offset, height);
  offset = afterEdges;

  const commandArrayLength = view.getUint32(offset, true);
  offset += 4;

  const commandBuffer = new Uint8Array(view.buffer, view.byteOffset + offset, commandArrayLength);

  return { width, height, centerX, centerY, leftSpacings, rightSpacings, commandBuffer };
}

function parseFrame(view: DataView, offset: number): { frame: ParsedFrame; nextOffset: number } {
  const frameType = view.getUint8(offset);
  const paletteNumber = view.getUint8(offset + 1);
  // possibleUncompressedSize at offset+2: skip
  offset += 6;

  const layerCount = (frameType & 1) + ((frameType >> 1) & 1) + ((frameType >> 2) & 1);

  let mainLayer: ParsedMainLayer | null = null;
  let shadowLayer: ParsedShadowLayer | null = null;

  for (let i = 0; i < layerCount; i++) {
    const width = view.getUint16(offset, true);
    const height = view.getUint16(offset + 2, true);
    const centerX = view.getInt16(offset + 4, true);
    const centerY = view.getInt16(offset + 6, true);
    const layerBytesLength = view.getUint32(offset + 8, true);
    // unknown uint32 at offset+12: skip
    const dataOffset = offset + 16;
    offset = dataOffset + layerBytesLength;

    if (i === 0) {
      mainLayer = parseMainLayerData(view, dataOffset, width, height, centerX, centerY, paletteNumber);
    } else if (i === 1) {
      shadowLayer = parseShadowLayerData(view, dataOffset, width, height, centerX, centerY);
    }
    // Layer index 2 (outline) is not rendered
  }

  if (!mainLayer) {
    throw new Error("SMX frame missing main layer");
  }

  return { frame: { mainLayer, shadowLayer }, nextOffset: offset };
}

function renderMainLayer(
  layer: ParsedMainLayer,
  basePaletteU32: Uint32Array,
  playerPaletteU32: Uint32Array,
): ImageData {
  const { width, height, leftSpacings, rightSpacings, commandData, pixelIndices } = layer;
  const imageData = new ImageData(width, height);
  // Uint32 view lets us write one pixel per store instead of four byte stores.
  // ImageData is always zeroed on creation, so transparent regions need no fill.
  const pixelsU32 = new Uint32Array(imageData.data.buffer, imageData.data.byteOffset, width * height);

  let pos = 0; // position in pixels (not bytes)
  let consumedPixels = 0;
  let yIndex = 0;

  // Row 0 left spacing (format guarantees first row is never empty / leftSpacing !== -1)
  pos += leftSpacings[0] ?? 0;

  for (let c = 0; c < commandData.length; c++) {
    const byte = commandData[c];
    const command = byte & 0b11;
    const count = (byte >> 2) + 1;

    if (command === 0 /* Skip */) {
      pos += count; // already transparent (ImageData zeroed)
    } else if (command === 1 /* Draw */) {
      for (let i = 0; i < count; i++) {
        pixelsU32[pos++] = basePaletteU32[pixelIndices[consumedPixels++]];
      }
    } else if (command === 2 /* DrawPlayer */) {
      for (let i = 0; i < count; i++) {
        pixelsU32[pos++] = playerPaletteU32[pixelIndices[consumedPixels++]];
      }
    } else if (command === 3 /* EndRow */) {
      pos += rightSpacings[yIndex]; // right spacing already transparent
      yIndex++;
      while (yIndex < height && leftSpacings[yIndex] === -1) {
        pos += width; // empty row already transparent
        yIndex++;
      }
      if (yIndex < height) {
        pos += leftSpacings[yIndex]; // left spacing of next row
      }
    }
  }

  return imageData;
}

function renderShadowLayer(layer: ParsedShadowLayer): ImageData {
  const { width, height, leftSpacings, rightSpacings, commandBuffer } = layer;
  const imageData = new ImageData(width, height);
  const pixelsU32 = new Uint32Array(imageData.data.buffer, imageData.data.byteOffset, width * height);

  let pos = 0;
  let yIndex = 0;
  let yPixels = 0;

  const initSpacing = leftSpacings[0] ?? 0;
  pos += initSpacing;
  yPixels += initSpacing;

  let i = 0;
  while (i < commandBuffer.length) {
    const commandByte = commandBuffer[i++];
    const command = commandByte & 0b11;
    const count = (commandByte >> 2) + 1;

    if (command === 0 /* Skip */) {
      pos += count; // already transparent
      yPixels += count;
    } else if (command === 1 /* Draw */) {
      for (let j = 0; j < count; j++) {
        const alpha = commandBuffer[i++];
        pixelsU32[pos++] = alpha << 24; // RGBA(0, 0, 0, alpha) in little-endian
        yPixels++;
      }
    } else if (command === 3 /* EndRow */) {
      pos += rightSpacings[yIndex]; // right spacing already transparent
      yPixels += rightSpacings[yIndex];
      // Workaround: some rows are 1 pixel short
      if (yPixels === width - 1) {
        pos++; // transparent pixel already zeroed
      }
      yIndex++;
      yPixels = 0;
      while (yIndex < height && leftSpacings[yIndex] === -1) {
        pos += width; // empty row already transparent
        yIndex++;
      }
      if (yIndex < height) {
        const ls = leftSpacings[yIndex];
        pos += ls;
        yPixels += ls;
      }
    }
  }

  return imageData;
}

export async function renderSmx(args: RenderSmxArgs): Promise<Frame[]> {
  const { data, palettes, playersToRender } = args;
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

  // SMX header: fileDescriptor(4) + version(2) + frameCount(2) + fileSizeSmx(4) + fileSizeSmp(4) + comment(16) = 32 bytes
  const frameCount = view.getInt16(6, true);

  // Pre-flatten palettes once; cached by palette number.
  // Base palette uses alpha pre-multiplication; player palette does not.
  const flatBasePalettes: Record<number, Uint32Array> = {};
  const flatPlayerPalettes: Record<number, Uint32Array> = {};

  const result: Frame[] = [];
  let offset = 32;

  for (let i = 0; i < frameCount; i++) {
    const { frame: parsedFrame, nextOffset } = parseFrame(view, offset);
    offset = nextOffset;

    const { paletteNumber } = parsedFrame.mainLayer;

    if (!flatBasePalettes[paletteNumber]) {
      flatBasePalettes[paletteNumber] = flattenPalette(palettes[paletteNumber].colors, true);
    }
    const basePaletteU32 = flatBasePalettes[paletteNumber];

    const shadowImageData = parsedFrame.shadowLayer ? renderShadowLayer(parsedFrame.shadowLayer) : null;

    const [shadow, ...renderBitmaps] = await Promise.all([
      shadowImageData ? createImageBitmap(shadowImageData) : Promise.resolve(null),
      ...playersToRender.map((player) => {
        const playerPaletteNum = PLAYER_PALETTES[player];
        if (!flatPlayerPalettes[playerPaletteNum]) {
          flatPlayerPalettes[playerPaletteNum] = flattenPalette(palettes[playerPaletteNum].colors, false);
        }
        return createImageBitmap(
          renderMainLayer(parsedFrame.mainLayer, basePaletteU32, flatPlayerPalettes[playerPaletteNum]),
        );
      }),
    ]);

    const renders: Record<number, ImageBitmap> = {};
    for (let j = 0; j < playersToRender.length; j++) {
      renders[playersToRender[j]] = renderBitmaps[j];
    }

    result.push({
      shadow,
      shadowCenterX: parsedFrame.shadowLayer?.centerX ?? 0,
      shadowCenterY: parsedFrame.shadowLayer?.centerY ?? 0,
      renders,
      width: parsedFrame.mainLayer.width,
      height: parsedFrame.mainLayer.height,
      centerX: parsedFrame.mainLayer.centerX,
      centerY: parsedFrame.mainLayer.centerY,
    });
  }

  return result;
}
