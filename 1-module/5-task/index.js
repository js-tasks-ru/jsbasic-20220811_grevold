function truncate(str, maxlength) {
  if (str.length <= maxlength) return str;
  const newStr = [];
  for (let i = 0; i < maxlength-1; i++) newStr.push(str[i]);
  return newStr.join("") + "…";
}
