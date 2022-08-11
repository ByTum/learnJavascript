/*let js = "amazing";
// console.log(40 + 8 + 23 - 10);
console.log('Naruephon');
 
  multiline comment 

console.log(23);
let firstName = "Naruephon";
console.log(firstName);
let pi = 3.1415;
// comment in line javascript
console.log(pi);*/
/*
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'string');
*/
/*
let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.95;
let johnMass = 92;
*/
/*
let markHeight = 1.88;
let markMass = 95;
let johnHeight = 1.76;
let johnMass = 85;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);
*/
/*
const firstName = "Naruephon";
const naruephonNew = `I'm ${firstName}`;
console.log(naruephonNew);
*/
/*
const age = 15 ;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log('can start driving license 🚗');
} else {
  const yearsLeft = 18 - age 
  console.log(`You too young. wait another ${yearsLeft} years :)`);
}
*/
/*
const birthYear = 2012;
let century ;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
/*
let markBMI = 28.3;
let johnBMI = 23.9;
if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI} !`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI} !`);
}
*/
/*
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log('23'-'10'-3);
console.log('23' / '10');
*/
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Naruephon'));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(NaN));
*/
/*
const age = 18;
if (age===18) console.log("strict");
*/
/*
const favourite = Number(prompt("what's your favourite number ?"));
console.log(favourite);
console.log(typeof(favourite));

if (favourite === 23) {
  console.log("23 Number");
} else if (favourite === 7 ) {
  console.log("7 Number");
} else if (favourite === 9 ) {
  console.log("9 Number");
} else {
  console.log("Number is not 23 or 7 or 9");
}
if (favourite !== 23 ) {
  console.log("why not 23 ?");
}
*/
/*
const hasDriversLicense = true ;
const hasGoodVision = true ;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("able to drive");
} else {
  console.log("Someone else should drive...");
}
*/
/*
let DolphinsScore = (97 + 112 + 101) / 3;
let KoalasScore = (109 + 95 + 106) / 3;
console.log(DolphinsScore);
console.log(KoalasScore);

  if (DolphinsScore > KoalasScore && DolphinsScore>=100) {
    console.log("DolphinsScore Win");
  } else if (KoalasScore > DolphinsScore && KoalasScore>=100) {
    console.log("KoalasScore Win");
  } else if(KoalasScore===DolphinsScore && KoalasScore>=100 && DolphinsScore>=100){
    console.log("both win");
  } else {
    console.log("No team win");
  }
  */
/*
const day = "saturday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory video");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D 😊");
    break;
  default:
    console.log("Not a valid day");
    break;
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory video");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D 😊");
} else {
  console.log("Not a valid day!");
}
*/
/*
const age = 23;
// age >= 18 ? console.log("wine") : console.log("Water");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);
*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill *0.15 : bill *0.2;
const final = bill + tip;
console.log(`bill ${bill}, 
tip ${tip}, 
final ${final}`);