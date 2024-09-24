// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let count = 1

// while(count <= 10) {
//     console.log(count);
//     count++
// }

// let cars = [
//     'BMW',
//     'MERS',
//     'PORSHCHE',
//     'CHEVROLET',
//     'RANGE ROVER',
//     'MUSTANG',
//     'BUGATTI',
//     'DOCHE',
// ]

// for(let i = 0; i < cars.length; i++) {
//     console.log(i, cars[i]);
// }





let numbers = [2, 4, 9, 10, 45, 67, 8, 90]
let num_1 = []
let num_2 = []

for (let  i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        num_1.push(numbers[i])
    } else {
        num_2.push(numbers[i])
    }
}
console.log(numbers);
console.log(num_1);
console.log(num_2);