function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

let t1 = performance.now();
console.log(addUpTo(100000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);


function addUpTo2(n) {
    return n * (n + 1) / 2;
}

let t12 = performance.now();
console.log(addUpTo2(100000000));
let t22 = performance.now();
console.log(`Time Elapsed: ${(t22 - t12) / 1000} seconds.`);

function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

logAtLeast5(5);

function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

logAtMost5(5);

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}