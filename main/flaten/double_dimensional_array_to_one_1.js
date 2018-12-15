'use strict';

function double_to_one(collection) {
  return collection.reduce(function (array_1,array_2){
    return array_1.concat(array_2);
  },[])
}

module.exports = double_to_one;
