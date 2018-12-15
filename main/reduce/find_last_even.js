'use strict';

function find_last_even(collection) {
  var even = collection.filter(function (element) {
    return element%2 == 0;
  });
  return even[even.length-1];
}

module.exports = find_last_even;
