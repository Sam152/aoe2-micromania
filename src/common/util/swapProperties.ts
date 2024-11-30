export default function swapProperties<T>(object: T, propertyA: keyof T, propertyB: keyof T): void {
  const temp = object[propertyA];
  object[propertyA] = object[propertyB];
  object[propertyB] = temp;
}
