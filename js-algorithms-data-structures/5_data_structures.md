# Arrays

## `splice()` and `slice()`

### `splice()`

`splice()` takes two arguments: the index at which to begin removing elements, and the number of elements to remove.

```javascript
let array = [1, 2, 3, 4, 5];
array.splice(2, 2);
console.log(array); // [1, 2, 5]
```

This method can take a third argument, which are the elements to insert at the index where you begin removing elements.

```javascript
let array = [1, 2, 3, 4, 5];
array.splice(2, 2, 'a', 'b');
console.log(array); // [1, 2, 'a', 'b', 5]
```

### `slice()`

`slice()` takes two arguments as well: the index at which to begin extracting, and the index at which to stop extracting (excluded).

```javascript
let array = [1, 2, 3, 4, 5];
let newArray = array.slice(2, 4);
console.log(newArray); // [3, 4]
```

## `indexOf()`

`indexOf()` returns the first index at which a given element can be found in the array, or -1 if it is not present.

```javascript
let array = [1, 2, 3, 4, 5];
console.log(array.indexOf(3)); // 2
console.log(array.indexOf(6)); // -1
```
## Example: delete an object on a specific index

```javascript
deleteFromIndex = function (arr, index) {
    // arr = [1, 2, 3, 4, 5]
    const before = arr.splice(0, index); // [1, 2]
    const after = arr.splice(1); // [4, 5]
    return [...before, ...after];
}

let arr = [1, 2, 3, 4, 5];
console.log(deleteFromIndex(arr, 2));
```