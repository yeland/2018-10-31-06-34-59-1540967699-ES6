'use strict';

let hybrid_operation_to_uneven = collection => 
  calculate_elements_sum(map_to_three_multiples_add_five(choose_odd(collection)));

let choose_odd = collection => collection.filter(element => element % 2);
let map_to_three_multiples_add_five = collections => collections.map(item => item * 3 + 5);
let calculate_elements_sum = collection => collection.reduce((preEle, ele) => preEle + ele);

module.exports = hybrid_operation_to_uneven;
