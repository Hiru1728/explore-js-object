// Create object using object literals
const player = {};
// property
player.name = 'littal ashraful';
player.speciality = 'batsman';
// method
player.bat = function () {
    console.log('Swing your bat');
}
// console.log(player);
// player.bat();

const student = {
    name: 'Pandey',
    job: 'Crketer',
    ball: function () {
        console.log('throw the ball');
    },
}

//2. Object constructor
const person = new Object();
// console.log(person);

// 3. Object create method
// const item = Object.create(null);
const atel = Object.create(student);
// console.log(item);
// console.log(atel.friend);

// 4.Class
class Person {
    name = 'Abul';
    address = 'chittagong';
    constructor(age) {
        this.age = age;
    }
}

const person1 = new Person(30);
// console.log(person1);

// 5. Function

function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 32);
console.log(tesla);

