'use strict';

function collect_min_number(collection) {
  return collection.reduce(function (preEle, ele) {
    return (preEle<ele)?preEle:ele;
  });
}

module.exports = collect_min_number;

