import { describe, test, expect, jest } from 'bun:test';

import { memo } from '../utils/memo';

describe('memo', () => {
  test('should return a memoized function', () => {
    const fn = jest.fn((a: number, b: number) => a + b);
    const memoizedFn = memo(fn);

    expect(typeof memoizedFn).toBe('function');
  });

  test('should return the same result for the same arguments', () => {
    const fn = jest.fn((a: number, b: number) => a + b);
    const memoizedFn = memo(fn);

    const result1 = memoizedFn(2, 3);
    const result2 = memoizedFn(2, 3);

    expect(result1).toBe(result2);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('should call the original function for different arguments', () => {
    const fn = jest.fn((a: number, b: number) => a + b);
    const memoizedFn = memo(fn);

    const result1 = memoizedFn(2, 3);
    const result2 = memoizedFn(4, 5);

    expect(result1).not.toBe(result2);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test('should work with different argument types', () => {
    const fn = jest.fn((a: number, b: string) => a.toString() + b);
    const memoizedFn = memo(fn);

    const result1 = memoizedFn(2, 'hello');
    const result2 = memoizedFn(2, 'world');

    expect(result1).toBe('2hello');
    expect(result2).toBe('2world');
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test('should handle complex calculations efficiently', () => {
    const complexFn = jest.fn((a: number, b: number) => {
      let result = 0;
      for (let i = 0; i < a; i++) {
        result += b;
      }
      return result;
    });
    const memoizedFn = memo(complexFn);

    const result1 = memoizedFn(1000, 5);
    const result2 = memoizedFn(1000, 5);

    expect(result1).toBe(result2);
    expect(complexFn).toHaveBeenCalledTimes(1);
  });

  test('should handle large inputs efficiently', () => {
    const largeFn = jest.fn((n: number) => {
      let result = 0;
      for (let i = 0; i < n; i++) {
        result += i;
      }
      return result;
    });
    const memoizedFn = memo(largeFn);

    const result1 = memoizedFn(1000000);
    const result2 = memoizedFn(1000000);

    expect(result1).toBe(result2);
    expect(largeFn).toHaveBeenCalledTimes(1);
  });
});
