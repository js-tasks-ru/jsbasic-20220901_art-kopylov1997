function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let arrNumbers = [];

  arr.forEach(el => {
    if (Number(el)) {
      arrNumbers.push(Number(el));
    }
  });

  return {
    min: Math.min(...arrNumbers),
    max: Math.max(...arrNumbers)
  };
}
