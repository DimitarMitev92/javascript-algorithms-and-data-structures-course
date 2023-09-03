// function same2(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for (let val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//     }
//     for (let val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }
//     for (let key in frequencyCounter1) {
//         if (!(key ** 2 in frequencyCounter2)) {
//             return false;
//         }
//         if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// same2([1, 2, 3], [1, 9, 4]);

// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//         return false;
//     }

//     const lookup = {};

//     for (let i = 0; i < first.length; i++) {
//         let letter = first[i];

//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup);

//     for (let i = 0; i < second.length; i++) {
//         let letter = second[i];

//         if (!lookup[letter]) {
//             return false;
//         } else {
//             lookup[letter] -= 1;
//         }
//     }
//     return true;
// }

// validAnagram('anagrams', 'anagrams');



// function sumZero(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === 0) {
//             return [arr[left], arr[right]];
//         } else if (sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//     }
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     let i = 0;
//     for(let j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return i + 1;
// }

// countUniqueValues([1,2,2,5,7,7,99])

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);


function search(array, val) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (array[middle] < val) {
            min = middle + 1;
        } else if (array[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

search([1,2,3,4,5,6],4)
