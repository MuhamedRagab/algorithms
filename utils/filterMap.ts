export type FilterMapOptions<T> = {
  filter?: (val: T, index: number) => boolean;
  map?: (val: T, index: number) => T;
  newInstance?: boolean;
};

export function filterMap<T>(arr: T[], options: FilterMapOptions<T> = {}): T[] {
  if (arr.length === 0) return arr;

  const { filter, map, newInstance = false } = options;
  let writeIndex = 0;
  const result = newInstance ? [] : arr;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (filter && !filter(val, i)) {
      continue;
    }

    if (newInstance) {
      result.push(map ? map(val, i) : val);
    } else {
      arr[writeIndex] = map ? map(val, i) : val;
      writeIndex++;
    }
  }

  if (!newInstance) {
    arr.length = writeIndex; // Adjust the length of the array to remove the unwanted elements
  }

  return result;
}
