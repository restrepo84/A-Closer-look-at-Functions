"use strict";

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

const flight = "LH234";
const steven = {
  name: "Steven Restrepo",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Checked In");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, steven);
// console.log(flight);
// console.log(steven);

// Is the same as doing...
// const flightNum = flight;
// const passenger = steven;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(steven);
checkIn(flight, steven);
