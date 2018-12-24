'use strict';

let get_letter_interval = (number_a, number_b) => number_map_to_word(get_integer_interval(number_a, number_b));

let get_integer_interval = (number_a, number_b) => {
  var collection = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      collection.push(i);
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      collection.push(i);
    }
  }
  return collection;
}
let number_map_to_word = collection => collection.map(item => String.fromCharCode(96 + item));

module.exports = get_letter_interval;
