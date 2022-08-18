function checkSpam(str) {
  const string1 = "1xBet".toLowerCase();
  const string2 = "XXX".toLowerCase();
  const strInLowerCase = str.toLowerCase();
  if (strInLowerCase.includes(string1) || strInLowerCase.includes(string2)) {
    return true;
  }
  return false;
}
