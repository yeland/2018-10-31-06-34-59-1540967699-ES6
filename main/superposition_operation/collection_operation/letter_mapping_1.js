'use strict';

let even_to_letter = collection => number_map_to_word(choose_even(collection));

let choose_even = collection => collection.filter(element => element % 2 == 0);

let number_map_to_word = collection => collection.map(item => String.fromCharCode(0x60 + item));

module.exports = even_to_letter;
