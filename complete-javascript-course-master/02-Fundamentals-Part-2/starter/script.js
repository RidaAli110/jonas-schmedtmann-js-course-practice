"use strict";
//Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const descFinland = describeCountry("Finland", 10, "Helsinki");
const descPortugal = describeCountry("Portugal", 5, "Lisbon");
const descEngland = describeCountry("England", 15, "London");
console.log(descFinland, descPortugal, descEngland);

function sayGoodbye(name) {
  console.log("Goodbye, " + name );
}
sayGoodbye("Rida");
//calculations
function calage(birthyear) {
  return 2025 - birthyear;
}
const age1 = calage(2006);
console.log(age1);

sayHello();
function sayHello(){
  console.log("hi");
}


//reasigning? expressions 
const colours = function() {
  console.log("red, green, blue")
}
const myColours = colours; 
myColours();
colours();
//adding numbers
function add(num1, num2) {
  return console.log(num1 - num2);
}
add(7, 4);
//using ifd else staements in function 
// function favGame(game) {
//   if (game === undefined) {
//     console.log('please provide your fav game, e.g. favGame ("super mario") ');
//   }
//   else  {
//     console.log(`my fav game is ${game}`);
//   }
// }
// favGame("sonic run");

//RETURN STAEMENT
function test() {
  return "hello"
}
console.log(test())

function favNum(num) {
  return `my fave number is ${num}`
}
favNum(7);



//ARROW FUNCTIONS
function percentageOfWorld1(population) {
   return (population / 7900) * 100;
}
const percentageOfWorld3 = population => (population / 7900) * 100; 
  const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441); 
const percUSA1 = percentageOfWorld1(332);

console.log(percPortugal1, percChina1, percUSA1);

//CALLING OTHER FUNCTIONS IN FUNCTIONS 

//   Create a function called getCity() that returns a city name like "Toronto".

// Create a function called getWeather() that returns a description like "sunny and 25°C".

// Create a function called getWeatherReport() that:

// Calls getCity() and getWeather()

// Returns a full sentence like:
// "The weather in Toronto today is sunny and 25°C."

// Log the result of getWeatherReport().

//CORRECT
function getCity() {
  return "new york"
}
 function getWeather() {
  return "sunny and 25c"
 } 
 function getWeatherReport() {
  const name = getCity();
  const temp = getWeather();
  return `the weather in ${name} today is ${temp}`
 }
 //test
 console.log(getWeatherReport());
 function getmeasure(height, width) {
  console.log(height * width);
 }
getmeasure(4, 2);


//ARRAYS
let listCountry = ['england', 'japan', 'korea'];
 listCountry[3] = 'italy';
 console.log(listCountry);
 console.log(listCountry[listCountry.length - 1]);
 
 console.log(listCountry);
 
 console.log(listCountry);
 console.log(listCountry.indexOf('greenland'));
 console.log(listCountry.includes('italy'));
  // [array methods] 
 //shift and pop

// listCountry.pop();
//  console.log(listCountry);
// listCountry.shift();
//  console.log(listCountry); 

// push and unshift, concat

//  listCountry.push('finland');
//  console.log(listCountry);
//  listCountry.unshift('greece')
//  console.log(listCountry);
//  let newListCountry = listCountry.concat (['ireland', 'spain', 'france']);
//  console.log(newListCountry);
//  console.log(listCountry); 
 
// join method

  //  console.log((listCountry.join('| ')));
   
   //split method

  //  let country = 'finland, porugal, lisbon';
  //  let countryArray = country.split(', ');
  //  console.log(countryArray);

   //slice method

  //  let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  //  console.log(numbers);
  //  let testSlice = numbers.slice(2, 7);
  //  console.log(testSlice);

  //  splice method

  //  numbers.splice(4, 1, 'z',);
  //  console.log(numbers);

  //  without removing items
  //  numbers.splice(5, 0, 'x');
  //  console.log(numbers);

  // reverse method

  // numbers.reverse();
  // console.log(numbers);

  // sort method
  
  // numbers.sort();
  // console.log(numbers);
  
  

  


  

  



   



   
   
   


                                                                                                                                                                                            
 