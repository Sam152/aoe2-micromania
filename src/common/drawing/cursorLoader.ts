import { Vector2 } from "three/src/math/Vector2.js";

export interface CursorAsset {
  image: ImageBitmap;
  hotspot: Vector2;
}

export async function loadCursorFile(url: string): Promise<CursorAsset> {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);

  // .cur header: reserved(2) + type(2) + count(2) = 6 bytes
  // First directory entry starts at byte 6:
  //   width(1) + height(1) + colorCount(1) + reserved(1) = 4 bytes
  //   hotspotX(2) + hotspotY(2) = 4 bytes  (at offsets 10, 12)
  //   imageSize(4) + imageOffset(4)         (at offsets 14, 18)
  const hotspotX = view.getUint16(10, true);
  const hotspotY = view.getUint16(12, true);
  const imageSize = view.getUint32(14, true);
  const imageOffset = view.getUint32(18, true);

  const imageData = bytes.slice(imageOffset, imageOffset + imageSize);

  // Modern .cur files embed PNG — detect by signature.
  const isPng = imageData[0] === 0x89 && imageData[1] === 0x50;
  const image = isPng ? await loadPng(imageData) : await loadDib(imageData);

  return { image, hotspot: new Vector2(hotspotX, hotspotY) };
}

async function loadPng(data: Uint8Array): Promise<ImageBitmap> {
  return createImageBitmap(new Blob([data], { type: "image/png" }));
}

async function loadDib(dib: Uint8Array): Promise<ImageBitmap> {
  const view = new DataView(dib.buffer, dib.byteOffset);

  const width = view.getInt32(4, true);
  // biHeight covers XOR pixels + AND mask, so actual image height is half.
  const height = Math.abs(view.getInt32(8, true)) / 2;
  const pixelDataOffset = 40; // BITMAPINFOHEADER is always 40 bytes for cursor DIBs

  const rgba = new Uint8ClampedArray(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // BMP rows are stored bottom-to-top.
      const srcRow = height - 1 - y;
      const src = pixelDataOffset + (srcRow * width + x) * 4;
      const dst = (y * width + x) * 4;

      // DIB pixel order is BGRA; canvas expects RGBA.
      rgba[dst + 0] = dib[src + 2];
      rgba[dst + 1] = dib[src + 1];
      rgba[dst + 2] = dib[src + 0];
      rgba[dst + 3] = dib[src + 3];
    }
  }

  return createImageBitmap(new ImageData(rgba, width, height));
}
