/**
 * Take an array and provide a list of new indexes based on their horizontal order
 * in a column. Instead of 0..19 it would read 0, 4, 8...
 *
 * 0    4    8     12    16
 * 1    5    9     13    17
 * 2    6    10    14    18
 * 3    7    11    15    19
 */
export default function columnize<T>(input: Array<T>, columns: number): Array<T> {
  const newArray: Array<T> = [];
  const indexMax = input.length - 1;
  input.forEach((item, index) => {
    const newIndex = index === indexMax ? indexMax : (index * columns) % indexMax;
    newArray[newIndex] = item;
  });
  return newArray;
}
