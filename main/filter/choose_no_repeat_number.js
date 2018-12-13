'use strict';

function choose_no_repeat_number(collection) {
  var number = collection.filter(function (element,index,self) {
    return self.indexOf(element) === index;
  });
  return number;
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
