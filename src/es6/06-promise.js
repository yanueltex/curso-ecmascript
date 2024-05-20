const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!');
        } else {
            reject('ops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    // .then() Se puede tener varios then como sea conveniente
    .catch(err => console.log(err));