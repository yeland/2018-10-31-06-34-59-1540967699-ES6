'use strict';
function rank_by_two_large_one_small(collection) {
  var asc = rank_asc(collection);
  for (let i = 0; i < asc.length - 3; i += 3) {
    var temp = asc[i];
    asc[i] = asc[i + 1];
    asc[i + 1] = asc[i + 2];
    asc[i + 2] = temp;
  }
  return asc;
}
function rank_asc(collection) {
  var asc = collection.sort(function (val1, val2) {
    return val1 - val2;
  });
  return asc;
};
module.exports = rank_by_two_large_one_small;
