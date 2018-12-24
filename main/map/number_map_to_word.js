'use strict';
let number_map_to_word = collection => collection.map(item => String.fromCharCode(96 + item));

module.exports = number_map_to_word;
