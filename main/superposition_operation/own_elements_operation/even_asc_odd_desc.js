'use strict';

let even_asc_odd_desc = collection => {
  let even_asc = choose_even(collection).sort((val1, val2) => val1 - val2);
  let odd_desc = choose_odd(collection).sort((val1, val2) => val2 - val1);
  return even_asc.concat(odd_desc);
};
let choose_even = collection => collection.filter(element => element % 2 == 0);
let choose_odd = collection => collection.filter(element => element % 2);

module.exports = even_asc_odd_desc;
