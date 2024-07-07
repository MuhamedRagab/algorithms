# algorithms

## filterMap

```typescript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filterMap(arr, {
  filter: x => x % 2 === 0,
  map: x => x * 2,
});

console.log(result); // [4, 8, 12, 16, 20]
```
