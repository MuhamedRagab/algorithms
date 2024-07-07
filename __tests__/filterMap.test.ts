import { describe, it, expect } from 'bun:test';

import { filterMap } from '../utils/filterMap';

describe('filterMap', () => {
  it('should filter an array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = filterMap(arr, {
      filter: val => val % 2 === 0,
    });
    expect(result).toEqual([2, 4, 6, 8]);
  });

  it('should map an array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = filterMap(arr, {
      map: val => val * 2,
    });
    expect(result).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
  });

  it('should return an empty array if the input array is empty', () => {
    const arr: number[] = [];
    const result = filterMap(arr, {
      filter: val => val % 2 === 0,
      map: val => val * 2,
    });
    expect(result).toEqual([]);
  });

  it('should filter and map an array', () => {
    const arr: number[] = [1, 3, 5, 7, 9];
    const result = filterMap(arr, {
      filter: val => val > 5,
      map: val => val * 2,
    });
    expect(result).toEqual([14, 18]);
  });
});
