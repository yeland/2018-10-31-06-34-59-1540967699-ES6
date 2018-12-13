'use strict';

function double_to_one(collection) {
  var one = collection.reduce(function (array_1,array_2){
    return array_1.concat(array_2);
  },[])
  return one;
  //在这里写入代码
}

module.exports = double_to_one;
