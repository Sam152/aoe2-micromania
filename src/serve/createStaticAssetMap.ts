const MIME_TYPES: Record<string, string> = {
  ogg: "audio/ogg",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  svg: "image/svg+xml",
  pal: "application/octet-stream",
  smx: "application/octet-stream",
  slp: "application/octet-stream",
};

function contentType(pathname: string): string {
  const ext = pathname.split(".").pop()?.toLowerCase() ?? "";
  return MIME_TYPES[ext] ?? "application/octet-stream";
}

export type StaticAssetMap = Record<string, {
  contentType: string;
  file: Uint8Array | string;
}>;

export function createStaticAssetMap(): StaticAssetMap {
  const assetsRoot = new URL("../../assets", import.meta.url).pathname;
  const map: StaticAssetMap = {};

  function walk(dir: string, urlPrefix: string) {
    for (const entry of Deno.readDirSync(dir)) {
      if (entry.name.startsWith(".")) continue;
      const filePath = `${dir}/${entry.name}`;
      const urlPath = `${urlPrefix}/${entry.name}`;
      if (entry.isDirectory) {
        walk(filePath, urlPath);
      } else {
        map[urlPath] = {
          contentType: contentType(entry.name),
          file: Deno.readFileSync(filePath),
        };
      }
    }
  }

  walk(assetsRoot, "");
  return map;
}
