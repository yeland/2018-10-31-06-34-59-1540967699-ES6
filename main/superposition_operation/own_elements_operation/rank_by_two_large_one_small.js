'use strict';
let rank_by_two_large_one_small = collection => {
  let asc = rank_asc(collection);
  for (let i = 0; i < asc.length - 3; i += 3) {
    [asc[i], asc[i + 1], asc[i + 2]] = [asc[i + 1], asc[i + 2], asc[i]];
  }
  return asc;
}
let rank_asc = collection => collection.sort((val1, val2) => val1 - val2);

module.exports = rank_by_two_large_one_small;
