// function countDown(num) {
//     if (num <= 0) {
//         console.log('All done');
//         return;
//     }

//     console.log(num);
//     num--;
//     countDown(num);
// }

// countDown(10);

// function sumRange(num) {
//     if (num === 1) return 1;
//     return num + sumRange(num - 1);
// }

// console.log(sumRange(12));

// function factorial(num) {
//     let total = 1;
//     for (let i = num; i > 1; i--) {
//         total *= i;
//     }
//     return total;
// }

// console.log(factorial(10));

// function factorial(num) {
//     if (num === 1) return 1;
//     return num * factorial(num - 1);
// }

// console.log(factorial(3));

// function collectOddValues(arr) {
//     let result = [];

//     function helper(helperInput) {
//         if (helperInput.length === 0) {
//             return;
//         }

//         if (helperInput[0] % 2 !== 0) {
//             result.push(helperInput[0]);
//         }

//         helper(helperInput.slice(1));
//     }

//     helper(arr);

//     return result;
// }

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//PURE RECURSION

function collectOddValues2(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));