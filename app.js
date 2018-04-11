// OBJECT LITERALS
let person1 = {
    name: "Josh",
    sayHello: function() {
        console.log(`Hello my name is ${person1.name}.`);
    }
}

let person2 = {
    name: "Kaitlyn",
    sayHello: function() {
        console.log(`Hello my name is ${person2.name}.`);
    }
}

let person3 = {
    name: "Alex",
    sayHello: function() {
        console.log(`Hello my name is ${person3.name}.`);
    }
}

let person4 = {
    name: "Allison",
    sayHello: function() {
        console.log(`Hello my name is ${person4.name}.`);
    }
}

let person5 = {
    name: "Emma",
    sayHello: function() {
        console.log(`Hello my name is ${person5.name}.`);
    }
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();


// PSEUDO CLASS
function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}

Person.prototype.greet = function() {
    alert(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`);
}

let p1 = new Person("Josh", "Tuscaloosa", 25);
let p2 = new Person("Kaitlyn", "Florence", 23);
let p3 = new Person("Alex", "Tuscaloosa", 26);
let p4 = new Person("Allison", "Florida", 26);
let p5 = new Person("Emma", "Tuscaloosa", 22);



// ES6 SYNTAX FOR CLASS/OBJECT
class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    greet() {
        alert(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`);
    }
}

let p1 = new Person("Josh", "Tuscaloosa", 25);
let p2 = new Person("Kaitlyn", "Florence", 23);
let p3 = new Person("Alex", "Tuscaloosa", 26);
let p4 = new Person("Allison", "Florida", 26);
let p5 = new Person("Emma", "Tuscaloosa", 22);

p1.greet();