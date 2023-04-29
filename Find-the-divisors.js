/*
Create a function named divisors/Divisors that takes an integer n > 1 
and returns an array with all of the integer's divisors
(except for 1 and the number itself), from smallest to largest. 

If the number is prime return the string '(integer) is prime'
*/


// Solution

function divisors(integer) {
  let divs = [];
  for(let i = 2; i < integer; i++) {
    if(integer % i === 0) {
    divs.push(i);
    }
  }
  return divs.length ? divs : integer + ' is prime';
};

// or

function divisors(integer) {
  let divisors = [...Array(integer).keys()].slice(2, integer).filter(div => integer % div == 0);
  return divisors.length > 0 ? divisors : integer + ' is prime';
};