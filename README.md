# algorithms

## filterMap

```typescript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filterMap(arr, x => x % 2 === 0, map: x => x * 2, true);

console.log(result); // [4, 8, 12, 16, 20]
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result2 = filterMap(arr, x => x % 2 === 0, map: x => x * 2);

console.log(result2); // [4, 8, 12, 16, 20]
console.log(arr); // [4, 8, 12, 16, 20]
```

## memo

```typescript
const fibonacci = (n: any): number => {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const LENGTH = 35;

const arr = Array.from({ length: LENGTH }, (_, i) => i + 1);
for (let i = 0; i < LENGTH; i++) {
  arr.push(i + 1);
}

for (let i = 0; i < LENGTH; i++) {
  arr.push(i + 1);
}

const isEven = (val: unknown) => (val as number) % 2 === 0;

const filterMapMemo = memo(filterMap);

console.time('filterMap');
filterMap(arr, isEven, fibonacci, true);
filterMap(arr, isEven, fibonacci, true);
filterMap(arr, isEven, fibonacci, true);
console.timeEnd('filterMap'); // 1.5s

console.time('filterMapMemo');
filterMapMemo(arr, isEven, fibonacci, true);
filterMapMemo(arr, isEven, fibonacci, true);
filterMapMemo(arr, isEven, fibonacci, true);
console.timeEnd('filterMapMemo'); // 0.5s
```
