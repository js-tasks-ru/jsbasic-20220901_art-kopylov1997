function camelize(str) {
  // ваш код...
  let arr = [];
  arr.push(str.split('-'));

  for (let i in arr) {
    let newArr = arr[i].slice(1);

    for (let k in newArr) {
      let res = newArr[k].slice(0, 1).toUpperCase() + newArr[k].slice(1);
      return res;

    }
  }

}
