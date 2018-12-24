'use strict';

let get_letter_interval_2 = (number_a, number_b) => number_map_to_word_over_26(get_integer_interval(number_a, number_b))

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
let number_map_to_word_over_26 = collection => {
  return collection.map(item => {
    if (item <= 26) {
      return String.fromCharCode(96 + item);
    } else {
      let first = 96 + Math.floor((item - 1) / 26);
      let second = 97 + (item - 1) % 26;
      return String.fromCharCode(first, second);
    }
  })
};

module.exports = get_letter_interval_2;

