'use strict';

function get_integer_interval_2(number_a, number_b) {
  var interval = get_integer_interval(number_a, number_b);  
  return collect_all_even(interval);;
}
function get_integer_interval(number_a, number_b) {
  var collection = new Array();
  if (number_a == number_b) {
    collection.push(number_a);
  } else if (number_a < number_b) {
    for(let i=number_a;i<=number_b;i++) {
      collection.push(i);
    }
  } else {
    for(let i=number_a;i>=number_b;i--) {
      collection.push(i);
    }
  }
  return collection;
}
function collect_all_even(collection) {
  var even = collection.filter(function (element) {
    return element%2 == 0;
  });
  return even;
}

module.exports = get_integer_interval_2;
