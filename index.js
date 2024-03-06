// EXAMPLE 1 - Check if a Date is between Two Dates using JavaScript

const date = new Date('2022-09-24');

const start = new Date('2022-03-18');
const end = new Date('2022-11-22');

if (date > start && date < end) {
  console.log('✅ date is between the 2 dates');
} else {
  console.log('⛔️ date is not in the range');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Dealing with invalid date strings

// // 👇️ Formatted as MM/DD/YYYY
// const dateStr = '07/21/2022';

// const [month, day, year] = dateStr.split('/');

// // 👇️ Create valid Date object
// const date = new Date(+year, month - 1, +day);
// console.log(date); // 👉️ Thu Jul 21 2022

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Date is within 30 days in JavaScript

// const then = new Date('2022-01-21');
// const now = new Date();

// const msBetweenDates = Math.abs(then.getTime() - now.getTime());

// // 👇️ convert ms to days                 hour   min  sec   ms
// const daysBetweenDates = msBetweenDates / (24 * 60 * 60 * 1000);

// if (daysBetweenDates < 30) {
//   console.log('date is within 30 days');
// } else {
//   console.log('date is NOT within 30 days');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a Date is more than 30 days from today's date in JS

// // ✅ Check if the date is more than 30 days AGO
// function isMoreThan30DaysAgo(date) {
//   //                   days  hours min  sec  ms
//   const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
//   const timestampThirtyDaysAgo =
//     new Date().getTime() - thirtyDaysInMs;

//   if (timestampThirtyDaysAgo > date) {
//     console.log('date is more than 30 days into the past');

//     return true;
//   } else {
//     console.log('date is NOT more than 30 days into the past');

//     return false;
//   }
// }

// // 👇️ true
// console.log(isMoreThan30DaysAgo(new Date('2021-09-24')));

// // 👇️ false
// console.log(isMoreThan30DaysAgo(new Date('2021-12-26')));

// // -----------------------------------------------------

// // ✅ Check if the date is more than 30 days IN THE FUTURE
// function isMoreThan30DaysInFuture(date) {
//   //                   days  hours min  sec  ms
//   const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
//   const timestampThirtyDaysInFuture =
//     new Date().getTime() + thirtyDaysInMs;

//   if (date > timestampThirtyDaysInFuture) {
//     console.log('date is more than 30 days into the future');

//     return true;
//   } else {
//     console.log('date is NOT more than 30 days into the future');

//     return false;
//   }
// }

// // 👇️ true
// console.log(isMoreThan30DaysInFuture(new Date('2029-04-25')));

// // 👇️ false
// console.log(isMoreThan30DaysInFuture(new Date('2022-02-23')));

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if a Date is within 24 hours in JavaScript

// const then = new Date('2022-01-24T09:30:20');
// const now = new Date();

// const msBetweenDates = Math.abs(then.getTime() - now.getTime());

// // 👇️ convert ms to hours                  min  sec   ms
// const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

// console.log(hoursBetweenDates);

// if (hoursBetweenDates < 24) {
//   console.log('date is within 24 hours');
// } else {
//   console.log('date is NOT within 24 hours');
// }

// ------------------------------------------------------------------

// // EXAMPLE 6 - Check if a Date is less than 24 Hours ago using JavaScript

// function isLessThan24HourAgo(date) {
//   // 👇️                    hour  min  sec  milliseconds
//   const twentyFourHrInMs = 24 * 60 * 60 * 1000;

//   const twentyFourHoursAgo = Date.now() - twentyFourHrInMs;

//   return date > twentyFourHoursAgo;
// }

// console.log(isLessThan24HourAgo(new Date())); // 👉️ true

// console.log(isLessThan24HourAgo(new Date('2022-01-25'))); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 7 - Check if a date is less than 24 hours ago and is not in the future

// function isLessThan24HourAgo(date) {
//   // 👇️                    hour  min  sec  milliseconds
//   const twentyFourHrInMs = 24 * 60 * 60 * 1000;

//   const twentyFourHoursAgo = Date.now() - twentyFourHrInMs;

//   return date > twentyFourHoursAgo && date <= Date.now();
// }

// console.log(isLessThan24HourAgo(new Date())); // 👉️ true

// console.log(isLessThan24HourAgo(new Date('2045-09-24'))); // 👉️ false
