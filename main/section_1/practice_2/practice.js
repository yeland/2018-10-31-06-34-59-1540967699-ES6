function collect_same_elements(collection_a, collection_b) {
  var one = collection_b.reduce(function (array_1,array_2){
    return array_1.concat(array_2);
  },[])
  return collection_a.filter(function (element){
    return one.includes(element);
  });
}

module.exports = collect_same_elements;
