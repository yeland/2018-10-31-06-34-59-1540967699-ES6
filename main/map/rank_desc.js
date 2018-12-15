'use strict';
var rank_desc = function (collection) {
  return collection.sort(function (val1, val2) {
    return val1 - val2;
  });
};
module.exports = rank_desc;
