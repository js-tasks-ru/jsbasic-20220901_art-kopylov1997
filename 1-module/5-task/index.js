function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
    let endStr = "...";
    str[maxlength] = endStr;
    return str.slice(0, maxlength) + endStr;
  } else {
    return str;
  }
}
