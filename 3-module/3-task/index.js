function camelize(str) {
  const upFirstChar = (word) => word[0].toUpperCase() + word.slice(1);
  const newStr = [];
  let words = str.split("-");
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      newStr.push(words[i]);
    } else {
      newStr.push(upFirstChar(words[i]));
    }
  }
  return newStr.join("");
}
