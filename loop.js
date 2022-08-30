const numbers = [12, 54, 65, 3, 54];
// for (const number of numbers) {
//     console.log(number);
// }
const bottle = {
    color: 'yellow',
    price: 50,
    isClean: true,
    capacity: 1,
}
// first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);

for (const key of keys) {
    console.log(key);
}