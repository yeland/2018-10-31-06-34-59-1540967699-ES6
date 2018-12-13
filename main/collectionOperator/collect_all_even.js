'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var even = collection.filter(function (element) {
    return element%2 == 0;
  });
  return even;
}

module.exports = collect_all_even;
