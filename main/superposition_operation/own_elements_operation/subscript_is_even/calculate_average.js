'use strict';

let calculate_average = collection => compute_average(choose_even(collection));
let choose_even = collection => collection.filter((element, index, self) => index % 2);

let compute_average = collection => {
  let sum = collection.reduce((preEle, ele) => preEle + ele);
  return Math.round(sum / collection.length);
}

module.exports = calculate_average;
