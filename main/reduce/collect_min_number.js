'use strict';

let collect_min_number = collection => collection.reduce((preEle, ele) => (preEle < ele) ? preEle : ele);

module.exports = collect_min_number;

