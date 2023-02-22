

const array = [1, 2, 3, 4];

let array2 = [...array, 5];

const array3 = array2.map(function (n) {
    return n * 10;
})

console.log(array);
console.log(array2);
console.log(array3);