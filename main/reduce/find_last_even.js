'use strict';

function find_last_even(collection) {
  var even = collection.filter(function (element) {
    return element%2 == 0;
  });
  return even[even.length-1];
  //在这里写入代码
}

module.exports = find_last_even;
