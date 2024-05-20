const arr = [1, 2, 3, 4];
console.log(arr);

var t = "Bonjour";
console.log(t.split(''));

arr.push(0);
console.log(arr);

console.log(arr.length);

arr.unshift(10);
console.log(arr);

// strg
var s1 = "hello";
var s2 = "team";
console.log(`${s1} ${s2}`);

console.log(10 % 2);
console.log(3 ** 4);
console.log(Math.abs(-4));

console.log(true && false);
console.log(true || false);

var y = 5;
console.log(++y);

const person = { 
    firstName: 'Adam',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '66 Main st',
        city: 'wtvr',
        state: 'over there'
    }
};
console.log(typeof(person));
console.log(person.age);
console.log(person.address.city);

person.email = "person@gmail.com";

console.log(person);

let resultat = parseInt("Hello");
console.log(resultat);

console.log(Boolean(resultat));

for (let i = 12; i >= 1; i--) {
    console.log(`For Loop Number: ${i}`);
}

let i = 1;
while (i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

var age = 2;

if (age >= 5) {
    console.log("hello");
} else if (age >= 3) {
    console.log("Bonjour");
} else {
    console.log("Bonsoir");
}

// switch
switch (true) {
    case (age >= 5):
        console.log("hello");
        break;
    case (age >= 3 && age < 5):
        console.log("Bonjour");
        break;
    case (age < 3):
        console.log("Bonsoir");
        break;
    default:
        console.log('there is no age');
}

function add(x, y) {
    return x + y;
}
console.log(add(7, 4));

const plus = (a, b) => a + b;
console.log(plus(5, 8));