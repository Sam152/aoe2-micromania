/**
 * Serializes ImageData into a Response object containing binary data.
 */
export function serializeImageDataToResponse(imageData: ImageData): Response {
  const { data, width, height } = imageData;

  const buffer = new ArrayBuffer(8 + data.length);
  const view = new DataView(buffer);

  view.setUint32(0, width, true);
  view.setUint32(4, height, true);

  new Uint8Array(buffer, 8).set(data);

  return new Response(buffer, { headers: { "Content-Type": "application/octet-stream" } });
}

/**
 * Deserializes a Response object containing binary data into an ImageData object.
 */
export async function deserializeResponseToImageData(response: Response): Promise<ImageData> {
  const buffer = await response.arrayBuffer();
  const view = new DataView(buffer);

  const width = view.getUint32(0, true);
  const height = view.getUint32(4, true);

  const data = new Uint8ClampedArray(buffer, 8);
  return new ImageData(data, width, height);
}
