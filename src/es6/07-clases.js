// Declarando
// class User {};
// Instancia de una clase
// const newUser = new User();


// Metodos
class user {

    greeting() {
        return "Hello";
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());


// Constructor

class user {
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting() {
        return "Hello";
    }
}

const david = new user();


// This

class user {
    constructor(name){
        this.name = name;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());


// Setters and Getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const develop = new user('David', 15);
console.log(develop.uAge);
console.log(develop.uAge = 20);