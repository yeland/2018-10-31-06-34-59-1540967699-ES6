'use strict';

let find_last_even = collection => {
  let even = collection.filter(element => element % 2 == 0);
  return even[even.length - 1];
}

module.exports = find_last_even;
