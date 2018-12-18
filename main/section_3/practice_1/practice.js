function create_updated_collection(collection_a, object_b) {
  var collection_b = object_b.value;
  return collection_a.map(function (element) {
    if (collection_b.includes(element.key)) {
      element.count -= 1;
    }
    return element;
  })
}

module.exports = create_updated_collection;
