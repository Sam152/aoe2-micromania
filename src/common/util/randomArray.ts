export default function randomArray<T>(input: Array<T>): T {
  return input[Math.floor(Math.random() * input.length)];
}
