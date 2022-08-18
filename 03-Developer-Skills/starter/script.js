// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));
*/

//const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
/*
const calxTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max);
  console.log(min);
  return max - min;
};
const amplitude = calxTempAmplitude(temperatures);
console.log(amplitude);
*/
// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
/*
const calxTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max);
  console.log(min);
  return max - min;
};
const amplitudeNew = calxTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C ) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  //B ) FIND
  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);
  //console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A ) IDENTIFY
//console.log(measureKelvin());
// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  //let max = temps[0];
  //let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`max is ${max}`);
  console.log(`min is ${min}`);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A ) IDENTIFY
console.log(amplitudeBug);
*/
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    //const element = data[i];
    str = str + `${arr[i]}°C in ${i + 1} days ... \n`;
  }
  console.log('...' + str);
  return arr;
};

printForecast(data1);
printForecast(data2);
*/