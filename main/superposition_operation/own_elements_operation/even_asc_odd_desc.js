'use strict';
var even_asc_odd_desc = function (collection) {
  var even = choose_even(collection);
  var odd = choose_odd(collection);
  var even_asc = even.sort(function (val1, val2) {
    return val1 - val2;
  });
  var odd_desc = odd.sort(function (val1, val2) {
    return val2 - val1;
  });
  return even_asc.concat(odd_desc);
};
function choose_even(collection) {
  return collection.filter(function (element) {
    return element % 2 == 0;
  });
}
function choose_odd(collection) {
  return collection.filter(function (element) {
    return element % 2;
  });
}

module.exports = even_asc_odd_desc;
