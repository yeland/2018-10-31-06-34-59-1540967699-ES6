'use strict';
var rank_asc = function(collection){
  var asc = collection.sort(compare);
  return asc;
};
var compare = function (val1, val2) {
  return val2 - val1;
}

module.exports = rank_asc;
