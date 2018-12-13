function collect_same_elements(collection_a, collection_b) {
  var commen= collection_a.filter(function (element){
    return collection_b.includes(element);
  });
  return commen;
}

module.exports = collect_same_elements;
