const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        // console.log(this.name, 'is participating in an exam.');
        return this.name + 'is participating in an exam.';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    giveTreat: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const results = kodomAli.exam();

console.log(results);

const badamAli = {
    name: 'kacah badam',
    money: 8000
}

const result2 = kodomAli.exam.call(badamAli);
// console.log(result2);
const badamMoney = kodomAli.giveTreat.call(badamAli, 400, 40);
console.log(badamMoney);
const badamMoney2 = kodomAli.giveTreat.apply(badamAli, [1000, 100]);
console.log(badamMoney2);
const badamAliTreat = kodomAli.giveTreat.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);

const data = { name: "Alice", age: 26 }
const dataCopy = JSON.parse(JSON.stringify(data));
data.age = 1000;
console.log(data);
console.log(dataCopy);

const obj = { a: 1, b: 7, c: 3, length: 2 };
console.log(Object.keys(obj).length);

const obj1 = { module: 35, video: 2 }; const obj2 = { module: 35, video: 2 };
console.log(obj1 === obj2);

const getGirlFriend = (name = "chokina") => "name"; console.log(getGirlFriend()); 