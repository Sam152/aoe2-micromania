import { deserializeResponseToImageData, serializeImageDataToResponse } from "./imageData";

const cacheVersion = 1;
const cacheName = `image-cache-v${cacheVersion}`;

export async function getCached(key: string): Promise<ImageData | undefined> {
  // console.time(key);
  try {
    const cache = await getCache();
    const cachedResponse = await cache.match(key);
    if (cachedResponse) {
      return await deserializeResponseToImageData(cachedResponse);
    }
    return undefined;
  } catch (error) {
    console.error("Error fetching from cache:", error);
    return undefined;
  } finally {
    // console.timeEnd(key);
  }
}

export async function setCached(key: string, image: ImageData): Promise<void> {
  try {
    const cache = await getCache();
    await cache.put(key, serializeImageDataToResponse(image));
  } catch (error) {
    console.error("Error setting cache:", error);
  }
}

let cache: Promise<Cache>;

function getCache(): Promise<Cache> {
  if (!cache) {
    cache = caches.open(cacheName);
  }
  return cache;
}
