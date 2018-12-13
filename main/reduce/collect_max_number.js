'use strict';

function collect_max_number(collection) {
  var max = collection.reduce(function (preEle, ele) {
    return (preEle>ele)?preEle:ele;
  });
  return max;
  //在这里写入代码
}

module.exports = collect_max_number;
