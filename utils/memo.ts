export type MemoizedFunction<
  T extends (...args: Parameters<T>) => ReturnType<T>
> = (...args: Parameters<T>) => ReturnType<T>;

export function memo<T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T
): MemoizedFunction<T> {
  const cache: Map<string, ReturnType<T>> = new Map();

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
