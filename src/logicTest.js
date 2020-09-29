import React from 'react';

export default function LogicTest() {

// ## question 1 short
const array = [9,3,2,19,3,4,10,34,-99,99];

function short(array) {
 
  const array2 = [];
  let pos = 0;
  let max = array[0]; 
  let min = array[0];
  
  for (let m = 0; m < array.length; m++) {
    if(max < array[m]){
      max = array[m];
    }
  }

  for (let i = 0; i < array.length; i++) {

    for(let a = 0; a < array.length; a++) {
      if(array[a] != null) {
        if(min > array[a]){
          min = array[a];
          pos = a;
        }
      }
    }

    array2[i] = min;
    array[pos] = null;
    min = max;

  }
  return array2;
}
console.log('Questão 1 (Short Array)', short(array))
 

// ## question 2 fatorial
function fatorial(n) {
  let result = 1; 
  for (let i = n; i > 1; i--) {
    result = result * i;
  }
  return result;
}
console.log('Questão 2 (fatorial)',fatorial(5));


// ## question 3

function fibonacci(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else if (n >= 3) {
    return (n - 1) + (n - 2);
  }
}
console.log('Questão 3 (fibonacci)', fibonacci(4))

  return(
    <>
    </>
  );
}

