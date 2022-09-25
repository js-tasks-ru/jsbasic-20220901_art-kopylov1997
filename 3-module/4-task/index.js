function showSalary(users, age) {
  // ваш код...
  let result = '';

  users.forEach(el => {
    if (el.age <= age) {
      result += `${el.name}, ${el.balance}\n`;
    }
  });

  return result.substring(0, result.length - 1);
}
