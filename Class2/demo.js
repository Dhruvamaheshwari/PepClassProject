/** @format */

var a = 30;
let b = "dhruva";

// const c = 0;
// if (a < 20)
//     console.log("mull: ", a * 20);
// else if (a === 30)
//     console.log("sub: ", a - 10);
// else
//     console.log("add: ", a + 30);

// function

function sum(a, b) {
  return a + b;
}

// console.log("the sum is: ", sum(30, 40));

// even and odd
// function even(a) {
//   if (a % 2 === 0) console.log(`${a} is Even number`);
//   else console.log(`${a} is odd number`);
// }

// function odd(a) {
//   if (a % 2 !== 0) console.log(`${a} is odd number`);
//   else console.log(`${a} is Even number`)
// }

// even(2);
// odd(3);

// create an array
function arrsum(arr) {
  let sum = 0;
  arr.map((val, ind) => {
    sum = sum + val;
    console.log(ind, " => ", val);
  });
  return sum;
}
// local storage = 5 to 10 MB (jab tak hum delete nhi krte h tab tak store rehta h)
// session sotorage = jb tak us tab/page pe h

let arr = [10, 20, 30, 40, 50];
// console.log("The sum of all array values: ", arrsum(arr));

// find the max. number in the array
function maxnum(arr2) {
  let maxele = -1;
  arr2.map((val, ind) => {
    if (maxele < val) maxele = val;
  });
  return maxele;
}

let arr2 = [10, 20, 70, 40, 50];
// console.log("The max element is: ", maxnum(arr2));

// arrow function
const name = () => {
  console.log("name is : Dhruva Maheshwari");
};
// name();

const agefun = (a = 2, b = 5) => {
  return a + b;
};
// console.log(agefun());
// console.log(agefun(10));
// console.log(agefun(10, 20));

// call back function
const mul = (a, b) => {
  return a * b;
};
const fun = (a, b, mul) => {
  return mul(a, b);
};
// console.log(fun(2, 3, mul));



// use settime out

const shwomess = (mess , callback) =>{
  console.log('function run..')
  setTimeout(() => {
    console.log("hello: ", mess);
    callback()
  }, 1000);
}

shwomess('Dhruva Maheshwari' , () =>{
  console.log("hiii")
})
