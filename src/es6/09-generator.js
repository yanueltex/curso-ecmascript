function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'Davir', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
