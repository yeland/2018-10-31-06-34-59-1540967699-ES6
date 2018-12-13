'use strict';

function choose_even(collection) {
  var even = collection.filter(function (element) {
    return element%2 == 0;
  });
  return even;
}

module.exports = choose_even;
