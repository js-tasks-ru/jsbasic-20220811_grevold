function getMinMax(str) {
  const words = str.split(" ");
  const numbers = [];
  for (let i = 0; i < words.length; i++) {
    const numberFromString = parseFloat(words[i]);
    if (!isNaN(numberFromString)) {
      numbers.push(numberFromString);
    }
  }

  return {
    max: Math.max(...numbers),
    min: Math.min(...numbers),
  };
}
