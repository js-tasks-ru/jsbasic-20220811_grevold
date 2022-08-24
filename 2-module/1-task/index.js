function sumSalary(salaries) {
  function isSalary(salary) {
    if (
      typeof salary === "number" &&
      !isNaN(salary) &&
      salary !== Infinity &&
      salary !== -Infinity
    ) {
      return true;
    }
    return false;
  }
  let result = 0;
  for (let key in salaries) {
    if (isSalary(salaries[key])) {
      result = result + salaries[key];
    }
  }
  return result;
}
