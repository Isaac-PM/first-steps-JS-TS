# Interesting examples

## Confirm the ending

Check if a string (first argument, str) ends with the given target string (second argument, target)-

### My solution

```javascript
function confirmEnding(str, target) {
  if (str.length < target.length) return false;
  for (let i = 1; i <= target.length; i++) {
    if (target[target.length - i] !== str[str.length - i]) return false;
  }
  return true;
}
```

## Sorting a number array

### My solution

```javascript
let arr = [8, 1, 3, 4, 10];
arr = arr.sort((a, b) => a - b);
console.log(arr); // [ 1, 3, 4, 8, 10 ]
```
