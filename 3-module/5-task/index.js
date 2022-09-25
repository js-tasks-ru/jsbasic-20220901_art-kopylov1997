function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let arrNumbers = [];

  arr.forEach(el => {
    if (Number(el)) {
      arrNumbers.push(Number(el));
    }
  });

  const obj = {};
  obj.min = Math.min(...arrNumbers);
  obj.max = Math.max(...arrNumbers);

  return obj;
}
