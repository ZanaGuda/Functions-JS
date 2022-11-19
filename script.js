// Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
// function check(a, b) {
//   if (a < b) {
//     console.log("-1");
//   } else if (a > b) {
//     console.log("1");
//   } else {
//     console.log("0");
//   }
// }
// check(1, 2);
// check(2, 1);
// check(3, 3);

// Write a function that counts the factorial of a given number.
// function factoriel(number) {
//   var fac = 1;
//   for (let i = number; i >= 1; i--) {
//     fac = fac * i;
//   }
//   console.log(fac);
// }
// factoriel(5);

// Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
// function display() {
//   let a = prompt("Give a number");
//   let b = prompt("Give another number");
//   let c = prompt("Give a number again");
//   console.log(a + b + c);
// }
// display();
// Write a function that accepts the width and length
// of a rectangle and calculates its area. If there is only one parameter given, it counts as a square.
// function area(width, height) {
//   if (height == undefined) {
//     height = width;
//   } else {
//     height = height;
//   }
//   return width * height;
// }
// console.log(area(3, 2));

// Write a function that accepts time (hours, minutes, seconds)
// and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
// function time(hours, minutes, seconds) {
//   if (seconds == undefined) {
//     seconds = "00";
//   } else {
//     seconds = seconds.toString();
//   }
//   hours = hours.toString();
//   minutes = minutes.toString();
//   return hours + ":" + minutes + ":" + seconds;
// }
// console.log(time(12, 21, 12));

// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds.
// For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
// function displayHours(hour, minutes, seconds) {
//   if (hour > 0 && minutes > 0 && seconds > 0) {
//     let hourInSeconds = hour * 3600;
//     let minutesInSeconds = minutes * 60;
//     let all = hourInSeconds + minutesInSeconds + seconds;
//     console.log(all);
//   }
// }
// console.log(displayHours(1, 25, 45));
// let h = 0;
// let m = 0;
// let s = 0;

// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
// function display(seconds) {
//   h = seconds / 3600;
//   seconds = seconds % 3600;
//   m = seconds / 60;
//   seconds = seconds % 60;
//   console.log(Math.floor(h) + ":" + Math.floor(m) + ":" + seconds);
// }
// display(5145);

// Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones:
// at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.
// function difference(h1, m1, s1, h2, m2, s2) {
//   let firstDate = displayHours(h1, m1, s1);
//   let secondDate = displayHours(h2, m2, s2);
//   let dateDifference;
//   if (firstDate >= secondDate) {
//     dateDifference = firstDate - secondDate;
//   } else {
//     dateDifference = secondDate - firstDate;
//     return display(dateDifference);
//   }
// }
