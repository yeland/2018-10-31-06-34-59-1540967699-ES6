'use strict';
var rank_asc = function (collection) {
  return collection.sort(function (val1, val2) {
    return val2 - val1;
  });
};

module.exports = rank_asc;
