class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}


const develop = new user('David', 15);
console.log(develop.uAge);
console.log(develop.uAge = 20);