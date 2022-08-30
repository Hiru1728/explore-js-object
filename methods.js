const student = {
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
        this.money = this.money - amount;
        return this.money - tips;
    }
}

const output = student.exam();
// console.log(output);
const impExam = student.improveExam('Algebra');
// console.log(impExam);
const remaining = student.giveTreat(400, 200);
console.log(remaining);
const takeRemaining = student.giveTreat(1200, 100);
console.log(takeRemaining);
