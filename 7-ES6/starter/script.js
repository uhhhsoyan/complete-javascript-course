
/*

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

///////////////////////////////
// Lecture: Classes

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name,
    this.yearOfBirth = yearOfBirth,
    this.job = job
}
 Person5.prototype.calculateAge = function() {
     var age = new Date.getFullYear() - this.yearOfBirth;
     console.log(age);
 }
 var john5 = new Person5('John', 1990, 'teacher');

 // ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date.getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

const john6 = new Person6('John', 1990, 'teacher');

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    } 
}

const bill = new Athlete6('Bill', 1990, 'swimmer', 3, 10);

bill.wonMedal();
*/

///////////////////////////////
// Coding Challenge 8

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];
    
}


function reportParks(p) {
    
    console.log('-----PARKS REPORT-----');
    
    // Density
    p.forEach(el => el.treeDensity());
    
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
    
}


function reportStreets(s) {
    
    console.log('-----STREETS REPORT-----');
    
    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);