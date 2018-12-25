let collect_same_elements = (collection_a, collection_b) => {
  const one = collection_b.reduce((array_1, array_2) => array_1.concat(array_2), []);
  return collection_a.filter(element => one.includes(element));
}

module.exports = collect_same_elements;
