'use strict';

function collect_max_number(collection) {
  return collection.reduce(function (preEle, ele) {
    return (preEle > ele) ? preEle : ele;
  });
}

module.exports = collect_max_number;
