function collect_same_elements(collection_a, collection_b) {
  var one = collection_b.reduce(function (array_1,array_2){
    return array_1.concat(array_2);
  },[])
  var same= collection_a.filter(function (element){
    return one.includes(element);
  });
  return same;
  //在这里写入代码
}

module.exports = collect_same_elements;
