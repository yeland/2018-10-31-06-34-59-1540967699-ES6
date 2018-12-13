'use strict';
var map_to_three_multiples = function(collections){
  var b = collections.map(function (item) {
    return (item * 3);
  })
  return b;
};

module.exports = map_to_three_multiples;
