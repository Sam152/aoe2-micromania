export function isNever(thing: never) {
  throw new Error("Is never triggered.");
}
