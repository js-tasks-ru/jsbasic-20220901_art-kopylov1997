function checkSpam(str) {
  // ваш код...
  let newStr = str.toLowerCase();
  let firstSearchStr = "1xBet".toLowerCase();
  let secondSearchStr = "XXX".toLowerCase();

  return newStr.indexOf(firstSearchStr) >= 0 || newStr.indexOf(secondSearchStr) >= 0;
}
