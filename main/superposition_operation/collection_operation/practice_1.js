'use strict';

let hybrid_operation = collection => calculate_elements_sum(map_to_three_multiples_add_two(collection));
let map_to_three_multiples_add_two = collections => collections.map(item => item * 3 + 2);
let calculate_elements_sum = collection => collection.reduce((preEle, ele) => preEle + ele);

module.exports = hybrid_operation;

