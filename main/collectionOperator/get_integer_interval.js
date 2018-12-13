'use strict';

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
  //在这里写入代码
}

module.exports = get_integer_interval;

