'use strict';

let amount_even = collection => calculate_elements_sum(choose_even(collection));
let choose_even = collection => collection.filter(element => element % 2 == 0);
let calculate_elements_sum = collection => collection.reduce((preEle, ele) => preEle + ele);

module.exports = amount_even;
