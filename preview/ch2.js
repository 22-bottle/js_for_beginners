const a = 5;
const b = 2;
let myName = "lhb";
console.log(a + b);
console.log("hello " + myName)

myName = "hee byeong";
console.log("your new name is " + myName);

const amIFat = true;
const c = null;
let something;

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek[1]);
daysOfWeek.push("sun");

const player = {
    name: "lhb",
    points: 10,
    fat: true,
};
player.fat = false;
player.lastName = "potato";

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("lhb", 24);

function plus(a, b){
    console.log(a + b);
}
plus(2,4);

function divide(a, b){
    console.log(a / b);
}
divide(4,2);

const player2 = {
    name: "lhb",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName);
    },
};
player2.sayHello("ls");

const age = parseInt(prompt("How old are you?"));
if (isNaN(age) || age < 0) {
    console.log("Please write a positive number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can't drink");
} else {
    
}