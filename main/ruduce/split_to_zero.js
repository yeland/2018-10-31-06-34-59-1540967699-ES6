'use strict';

function spilt_to_zero(number, interval) {
  var collection = new Array();
  let i = number;
  do {
    collection.push(i);
    i = Math.round((i-interval)*10)/10;   
  } while(i>0)

  collection.push(i);

  return collection;
  //在这里写入代码
}

module.exports = spilt_to_zero;
