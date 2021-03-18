const MyClass = function({name1, name2, name3} = {}) {
    this.value1 = name1;
    this.value2 = name2;
    this.value3 = name3;
};
MyClass.prototype.sayHello = function () {
    console.log('hi')
}
const myExamOfClass = new MyClass ({
    name1: 'Micke',
    name2: 'The',
    name3: 'Mouse',
})
// console.log(myExamOfClass.sayHello)
let myNumber = 1;
function myFn (x) {
    console.log('timer', x);
}
setTimeout(myFn, 1000, myNumber);
myNumber = 2;
console.log("🚀myNumber", myNumber);
// setTimeout(myFn, 1000, myNumber);
function mySecondFn () {
    myNumber = 3;
}
mySecondFn();
console.log("🚀myNumber", myNumber);
// setTimeout(myFn, 1000, myNumber);
