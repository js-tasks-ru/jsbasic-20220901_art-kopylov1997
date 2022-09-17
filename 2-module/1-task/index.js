function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (salaries[key] === Number(salaries[key])
      && salaries[key] !== Infinity
      && salaries[key] !== -Infinity
      && salaries[key] !== isNaN(salaries[key])) {
      sum += salaries[key];
    }
  }

  return sum;
}
