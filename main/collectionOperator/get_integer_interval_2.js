'use strict';

let get_integer_interval_2 = (number_a, number_b) => collect_all_even(get_integer_interval(number_a, number_b));

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
let collect_all_even = collection => collection.filter(element => element % 2 === 0);


module.exports = get_integer_interval_2;
