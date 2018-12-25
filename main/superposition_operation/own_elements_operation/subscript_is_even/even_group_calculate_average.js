'use strict';
let even_group_calculate_average = collection => {
  const even = choose_even(choose_index_even(collection));
  if (!even.length) {
    return [0];
  } else {
    return calculate_average(even);
  }
};
let choose_even = collection => collection.filter(element => element % 2 == 0);
let choose_index_even = collection => collection.filter((element, index, self) => index % 2);
let calculate_average = collection => group(collection).map(element => compute_average(element));

let group = collection => {
  const one = choose_length(collection, 10);
  const two = choose_length(collection, 100);
  const three = choose_length(collection, 1000);
  let array = [];
  if (one.length) {
    array.push(one);
  }
  if (two.length) {
    array.push(two);
  }
  if (three.length) {
    array.push(three);
  }
  return array;
}
let choose_length = (collection, number) => collection.filter(element =>
  element < number && element > number / 10);

let compute_average = collection => {
  let sum = collection.reduce((preEle, ele) => {
    return preEle + ele;
  });
  return Math.round(sum / collection.length);
}

module.exports = even_group_calculate_average;
