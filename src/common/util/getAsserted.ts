export function getAsserted<T>(input: T): NonNullable<T> {
  if (input === undefined || input === null) {
    throw new Error();
  }
  return input;
}
