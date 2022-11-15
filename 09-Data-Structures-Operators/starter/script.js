'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order receive! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Naruephon Chokwinit'.split(' '));

const [firstName, lastName] = 'Naruephon Chokwinit'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
    //namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessicA aNN smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Naruephon'.padStart(20, '+').padEnd(30, '+'));

////////////////////////////////////////
// Working with String - Part 2
/*
const airline = 'TAP Air portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('Naruephon'.toUpperCase());

// Fix capitalization in name
const passenger = 'NarUEpHon'; // Naruephon
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@naruephon.io';
const loginEmail = '   Hello@Naruephon.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97฿';
const priceUS = priceGB.replace('฿', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus 320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

////////////////////////////////////////
// Working with string - Part 1
/*
const airline = 'TAP Air portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 🙄');
  else console.log('You got lucky 😊');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('naruephon'));
console.log(typeof new String('naruephon'));
console.log(typeof new String('naruephon').slice(1));
*/

// Coding Challenge #3
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔀 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔀 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔀 Substitution'],
  [72, '🔀 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

// 1.
// const events = new Map(gameEvents);
const events = new Set(gameEvents.values());
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}
*/

// Maps: Iteration การทวน Map
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('Your anser'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// code line buttom result same line top
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

*/

// Maps : Fundamentals
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenza Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);
console.log(rest);
console.log(rest.size);

rest.clear();
console.log(rest);
console.log(rest.size);

rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
*/

// Sets
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('Naruephon'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
console.log(orderSet);

orderSet.delete('Risotto');
console.log(orderSet);

// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// ... pack to array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Naruephon').size);

*/
// Coding challenge 2
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// Coding Challenge 2
// 1.
for (const [index, name] of game.scored.entries()) {
  console.log(`Goal ${index + 1} : ${name}`);
}

// 2.
const odds = Object.values(game.odds);
let averages = 0;
for (const odd of odds) averages += odd;
averages /= odds.length;

console.log(averages);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team);
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  //console.log(game);
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

// console.log(odds);
/*
// Looping Objects: Object Keys, Values, and Entries
// Property Name
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days :`;
for (const day of Object.keys(openingHours)) {
  openStr += ` ${day},`;
}
// console.log(openStr);

// Property Value
const values = Object.values(openingHours);
// console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/*
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // console.log(`On ${day}, we open at ${open}`);
}

// methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Naruephon', email: 'Hello@' }];
// console.log(users);
// const users = [];
console.log(users[0]?.name ?? 'User array empty');
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array empty');
}
*/

// The for of loop
/* 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
for (const item of menu) {
  console.log(item);
}

// for (const item of menu.entries()) {
//   // console.log(item);
//   console.log(`${item[0] + 1} : ${item[1]}`);
// }
// same
for (const [i, el] of menu.entries()) {
  // console.log(item);
  console.log(`${i + 1} : ${el}`);
}
*/
// console.log(...menu.entries());
/*
// Coding challenge
*/

/*
// 1.
const [players1, players2] = game.players;
// console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');f
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// same on top
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null and undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';

rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);
*/
// The nullish Coalescing Operator
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

// Short Circuting (&& and ||)
/*
console.log('----OR----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Tum');
console.log('' || 'Tum');
console.log(true || 0);
console.log('OR return first truthy or return last falsy ', undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----AND----');
console.log(
  'AND return first falsy value or last value truthy',
  0 && 'Naruephon'
);

console.log('Hello' && 23 && null && 'Naruephon');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
/*
// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log('weekdays', weekdays);

// 2) fucntions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    //sum = sum + numbers[i];
    sum += numbers[i];
  }
  console.log(sum);
};
add(1, 2);
add(9, 5, 4, 8, 1, 3);
add(8, 1, 2, 9, 7, 1, 3, 4);

const x = [1, 2, 3];
add(...x);
//console.log(x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/
/*
// The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log('badNewArr', badNewArr);

const newArr = [1, 2, ...arr];
console.log('newArr', newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, string, maps, sets. NOT objects
const str = 'Naruephon';
const letters = [...str, '', 'N.'];
console.log(letters);
console.log(...str);

// Real world examples
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { founderIn: 2000, ...restaurant, founder: 'Tum' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Naruephon C';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
// Destructing Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Bangkok',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Bangkok',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/
