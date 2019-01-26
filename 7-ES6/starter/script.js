
// Strings ES5 vs ES6

let firstName = 'Eric';
let lastName = 'Essoyan';
const yearOfBirth = 1992;

function calcAge(year) {
    return 2019 - year;
}

console.log(`My name is ${firstName} ${lastName} and I am ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('D'));
console.log(n.endsWith('n'));
console.log(n.includes('sso'));
console.log(firstName.repeat(3));

// Arrow functions 

const years = [1990, 1965, 1982, 1937];

//// ES5

var ages5 = years.map(function(el) {
    return 2019 - el;
})
console.log(ages5);

//// ES6

let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});

console.log(ages6);

// Arrow functions part 2

//// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);    
        })
    }
}
box5.clickMe();

//// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this .color;
            alert(str);    
        });
    }
}
box6.clickMe();

// -------

function Person(name) {
    this.name = name;
};

//// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['John', 'Mark', 'Jane'];
new Person('Dave').myFriends5(friends);

//// ES6
Person.prototype.myFriends6 = function(friends) {
    let arr = friends.map(el => 
        `${this.name} is friends with ${el}`
    );
    console.log(arr);
}

new Person('Doug').myFriends6(friends);

// Destructuring

//// ES5

var john = ['john', 26];
var name = john[0];
var age = john[1]; 

// ES6
const [nm, yr] = ['john', 26];
console.log(nm);
console.log(yr);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

///////////////////////////////
// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

// ES6 
Array.from(boxes).forEach(el => el.style.backgroundColor = 'dodgerblue'); 

