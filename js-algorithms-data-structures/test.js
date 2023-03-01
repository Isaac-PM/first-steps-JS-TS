deleteFromIndex = function (arr, index) {
    // arr = [1, 2, 3, 4, 5]
    const before = arr.splice(0, index); // [1, 2]
    const after = arr.splice(1); // [4, 5]
    return [...before, ...after];
}

let arr = [1, 2, 3, 4, 5];
console.log(deleteFromIndex(arr, 2));