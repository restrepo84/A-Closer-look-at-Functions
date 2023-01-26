"use strict";
//* Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassenger = 1,
//   price = 199 * numPassenger
// ) {
// ES5 version
// numPassenger = numPassenger || 1;
// price = price || 199;

//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

// createBooking("LH123", undefined, 1000); // skipping a parameter

//* How Passing Arguments Works; Value vs Reference

// const flight = "LH234";
// const steven = {
//   name: "Steven Restrepo",
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert("Checked In");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// checkIn(flight, steven);
// console.log(flight);
// console.log(steven);

// Is the same as doing...
// const flightNum = flight;
// const passenger = steven;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(steven);
// checkIn(flight, steven);

//* Functions Accepting Callback Functions

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// Higher-Order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);

// transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
// const high5 = function () {
//   console.log("👋");
// };
// document.body.addEventListener("click", high5);

// ["Steven", "Martha", "Adam"].forEach(high5);

//* Functions Returning Functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Steven");
// greeterHey("Jessica");

// greet("Hello")("Steven");

// challenge
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetArr("Hi")("Steven");

//* The call and apply Methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Steven Restrepo");
lufthansa.book(635, "Jessica Williams");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
//book(23, "Jessica William");

// Call method
book.call(eurowings, 23, "Jessica Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Coral Restrepo");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 77, "Naiya Restrepo");
console.log(swiss);

// Apply Method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData); // this apply method is not use in modern JS
console.log(swiss);

// this is a better way to call it then apply
book.call(swiss, ...flightData);
