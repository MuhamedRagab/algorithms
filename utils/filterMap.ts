export function filterMap<T>(
  arr: T[],
  filter: (val: T, index: number) => boolean,
  map: (val: T, index: number) => T,
  newInstance: boolean = false
): T[] {
  if (arr.length === 0) return arr;

  let writeIndex = 0;
  const result = arr.reduce(
    (acc: T[], val: T, i: number) => {
      if (!filter(val, i)) return acc;

      const mappedVal = map(val, i);
      if (!newInstance) {
        acc[writeIndex] = mappedVal;
        writeIndex++;
      } else {
        acc.push(mappedVal);
      }
      return acc;
    },
    newInstance ? [] : arr
  );

  arr.length = !newInstance ? writeIndex : arr.length;

  return result;
}
