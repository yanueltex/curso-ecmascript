function newUser(name, age, country){
    var name = name || 'Alejandro';
    var age = age || 31;
    var country = country || 'VZ';
    console.log(name, age, country);
}
newUser();
newUser('Gaby', 29, 'Col');

// Mejor usar:

function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
}
newAdmin();
newAdmin('Pedro', 40, 'PE');