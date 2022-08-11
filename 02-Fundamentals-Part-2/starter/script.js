"use strict";
// use strict mode for check variable
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive :D");
*/
/*
function logger() {
  console.log("run function logger");
}
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice ;
}

const appleJuice = fruitProcessor(10, 2);
console.log(appleJuice);
console.log(fruitProcessor(10, 2));
*/
/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);
*/

/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birhtYear, firstname) => {
  const age = 2037 - birhtYear;
  const retirement = 65 - age ;
  // return retirement;
  return `${firstname} retires in ${retirement} ` 
}

console.log(yearsUntilRetirement(1991, 'Naruephon'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/
/*
function cutFruitPieces(fruit) {
  return fruit*4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)
  // console.log(applePieces, orangePieces);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice ;
}
console.log(fruitProcessor(2,3));  
*/

// continue from home

/*
//test data 1
const calcAverage = (a, b, c) => (a+b+c)/3 ;

let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

console.log("avgDolhins", avgDolhins);
console.log("avgKoalas", avgKoalas);

const checkWinner = function (avgDolhins,avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(avgDolhins,avgKoalas);

//test data 2

avgDolhins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

console.log("avgDolhins", avgDolhins);
console.log("avgKoalas", avgKoalas);

checkWinner(avgDolhins,avgKoalas);
*/
/*
const friends = ["Michael", "Steven", "Peter"];
console.log(typeof friends);
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

// get the last element from array
console.log(friends[friends.length - 1]);

//change value in array
friends[2] = "Naruephon";
console.log(friends);

// replace variable in array

const firstName = "Naruephon";
const naruephon = [firstName, "Bob", 2022 - 2000, "Programmer", friends];

console.log(naruephon);
console.log(naruephon.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1);
console.log(age2);
console.log(age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1])
];
console.log(ages);
*/
/*
const friends = ["Michael", "Steven", "Peter"];
// Add last element in array 
const newLength = friends.push("Tum");
console.log(friends);
console.log(newLength);
// Add first element 
friends.unshift("John");
console.log(friends);

// Remove element 
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First 
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// find element in array 
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log("You have a friend called Steven");
}
*/
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

//allow function
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log("bills ",bills, "Tips ",tips);

const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log("total", total);
*/
/*
// objects
const naruephon = {
  firstName: "Naruephon",
  lastName: "Tum",
  age: 2022 - 2000,
  job: "Programmer",
  friends: ["Michael", "Steven", "Peter"],
};
console.log(naruephon);

//get data from objects
console.log(naruephon.lastName);
console.log(naruephon["lastName"]);

const nameKey = "Name";
console.log(naruephon["first" + nameKey]);
console.log(naruephon["last" + nameKey]);

const interestedIn = prompt("What do you want ?");

// bracket notation work !!!
if (naruephon[interestedIn]) {
  console.log(naruephon[interestedIn]);
} else {
  console.log("Wrong request Choose firstName lastName age job friends");
}
//dot notation not work
//console.log(naruephon.interestedIn);
naruephon.location = "Bangkok";
naruephon['twitter'] = "Tum";
console.log(naruephon);

//challenge
console.log(`${naruephon.firstName} has ${naruephon.friends.length} friends, best friends is ${naruephon.friends[0]}`);
*/
/*
const naruephon = {
  firstName: "Naruephon",
  lastName: "Tum",
  birthYear: 2000,
  job: "Programmer",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 
      'a' : 'no' } driver's license`}
};

// console.log(naruephon.calcAge(2001));
console.log(naruephon.calcAge());
console.log(naruephon.age);
console.log(naruephon.age);
console.log(naruephon.age);
// console.log(naruephon['calcAge'](2000)); 
// challenge 
console.log(naruephon.getSummary());
*/
/*
const mark = {
  fullName: "Mark Miller",
  weights: 78,
  height: 1.69,
  calcBMI: function () {
    return this.bmi = this.weights / (this.height * this.height) 
  }
}

const john = {
  fullName: "John Smith",
  weights: 92,
  height: 1.95,
  calcBMI: function () {
    return this.bmi = this.weights / (this.height * this.height) 
  }
}
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName} BMI ${mark.bmi} is higher than ${john.fullName} ${john.bmi} `);
} else {
  console.log(`${john.fullName} BMI ${john.bmi} is higher than ${mark.fullName} ${mark.bmi} `);
}
*/

//for loop

//console.log("1 🏋️‍♂️");
// for loop keeps running while condition is true
/*
for (let rep = 1; rep <=  10 ; rep++) {
  console.log(`${rep} 🏋️‍♂️`);
}*/
/*
const naruephon = [
   "Naruephon",
  "Tum",
  2022 - 2000,
  "Programmer",
  ["Michael", "Steven", "Peter"],
  true
];
const types = [];

for (let i = 0; i < naruephon.length ; i++) {
  console.log(naruephon[i], typeof naruephon[i]);
  //read from naruephon array 
  //types[i] = typeof naruephon[i];
  types.push(typeof naruephon[i])
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length ; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break 
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < naruephon.length ; i++) {
  if (typeof naruephon[i] !== 'string') continue;
  console.log(naruephon[i], typeof naruephon[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < naruephon.length ; i++) {
  if (typeof naruephon[i] === 'number') break;
  console.log(naruephon[i], typeof naruephon[i]);
}
*/
/*
const naruephon = [
  "Naruephon",
  "Tum",
  2022 - 2000,
  "Programmer",
  ["Michael", "Steven", "Peter"],
  true,
];

for (let i = naruephon.length - 1; i >= 0; i--) {
  console.log(i, naruephon[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- String exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}
*/
/*
// while loop 
for (let rep = 1; rep <=  10 ; rep++) {
  //console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

let rep = 1;
while(rep <= 10) {
  //console.log(`while : Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1 

while (dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1 
  if (dice === 6) console.log('loop end');
}
*/

const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

const bills = [22,295,176,440,37,105,10,1100,86,52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length ; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills,tips,totals);

const calcAverage = function(arr){
  let sum = 0 ;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  //console.log(sum);
  return sum / arr.length  
}
console.log(calcAverage([2,3,7])); 
console.log(calcAverage(totals)); 
console.log(calcAverage(tips)); 