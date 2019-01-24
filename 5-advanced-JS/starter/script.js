// Function constructor

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
        console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

john.calculateAge();
    
var jane = new Person('jane', 1969, 'designer');
    
var mark

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto); 
*/


/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i <arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello, ' + name + 'what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');
*/

/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirement(66)(1990);
retirementUS(1990);
*/

/*
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
        return console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
        return console.log('What subject do you teach, ' + name + '?');
        } else {
        return console.log('Hello, ' + name + 'what do you do?');
        }
    }
}

interviewQuestion('teacher')('Jane');
*/

// CODING CHALLENGE

var Question = function(question, answerChoices, correctAnswer) {
    this.question = question;
    this.answerChoices = answerChoices;
    this.correctAnswer = correctAnswer;
}

var firstQuestion = new Question('What year is it?', ['0: 2018', '1: 2019', '2: 2020'], 1);
var secondQuestion = new Question('What month is it?', ['0: Jan', '1: Feb', '2: Mar'], 1);
var thirdQuestion = new Question('What day number is it?', ['0: 20th', '1: 21st', '2: 22nd'], 1);

var arrQuestions = [firstQuestion, secondQuestion, thirdQuestion];

function randQuestion(arr) {
    return arr[Math.random() * arr.length];
}

var currQuestion = randQuestion(arrQuestions);

console.log(currQuestion.question);
console.log(currQuestion.answerChoices[0]);
console.log(currQuestion.answerChoices[1]);
console.log(currQuestion.answerChoices[2]);

var answer = prompt('Please enter you answer below:');
console.log(answer);








