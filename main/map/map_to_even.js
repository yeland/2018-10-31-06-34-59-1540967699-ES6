'use strict';
function map_to_even(collection){
  var b = collection.map(function (item) {
    return (item * 2);
  })
  return b;
}
module.exports = map_to_even;
