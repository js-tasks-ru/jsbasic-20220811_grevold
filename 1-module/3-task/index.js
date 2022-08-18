function ucFirst(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}
