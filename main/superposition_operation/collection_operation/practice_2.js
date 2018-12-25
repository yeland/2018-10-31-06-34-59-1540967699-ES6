'use strict';

let hybrid_operation_to_uneven = collection => map_to_three_multiples_add_two(choose_odd(collection));
let choose_odd = collection => collection.filter(element => element % 2);
let map_to_three_multiples_add_two = collections => collections.map(item => item * 3 + 2);

module.exports = hybrid_operation_to_uneven;

