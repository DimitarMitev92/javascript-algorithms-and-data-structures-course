let instructor = {
    firstName: 'Kelly',
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
};

console.log(Object.values(instructor));
console.log(Object.keys(instructor));
console.log(Object.entries(instructor));
console.log(instructor.hasOwnProperty('firstName'));

let names = ['Michael', 'Melissa', 'Andrea'];
let values = [true, {}, [], 2, 'awesome'];

console.log(names[2]);
