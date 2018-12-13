'use strict';

function collect_min_number(collection) {
  var min = collection.reduce(function (preEle, ele) {
    return (preEle<ele)?preEle:ele;
  });
  return min;
  //在这里写入代码
}

module.exports = collect_min_number;

