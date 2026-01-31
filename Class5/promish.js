/** @format */

// User promish
const promish = new Promise((resolve, rejesct) => {
  let age = 17;
  setTimeout(() => {
    if (age < 18) rejesct("you are not valid to give the voat");
    else resolve("you are valid to give the voat");
  }, 2000);
});

promish.then((msg) => console.log(msg)).catch((err) => console.log(err));



//Q1 => 