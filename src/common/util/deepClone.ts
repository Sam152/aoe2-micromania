export default function deepClone<T>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}
