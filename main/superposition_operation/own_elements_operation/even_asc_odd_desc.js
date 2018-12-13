'use strict';
var even_asc_odd_desc = function(collection){
  var even = choose_even(collection);
  var odd = choose_odd(collection);
  var even_asc = even.sort(compare_n);
  var odd_desc = odd.sort(compare);
  return even_asc.concat(odd_desc);
};
function choose_even(collection) {
  //在这里写入代码
  var even = collection.filter(function (element) {
    return element%2 == 0;
  });
  return even;
}
function choose_odd(collection) {
  //在这里写入代码
  var even = collection.filter(function (element) {
    return element%2;
  });
  return even;
}
var compare = function (val1, val2) {
  return val2 - val1;
}
var compare_n = function (val1, val2) {
  return val1 - val2;
}
module.exports = even_asc_odd_desc;
