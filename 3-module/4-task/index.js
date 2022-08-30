function showSalary(users, age) {
  function isUserSatisfyAge(user) {
    if (user.age <= age) return true;
    return false;
  }

  function mapUserToString(user) {
    return `${user.name}, ${user.balance}`;
  }
  const result = [];
  for (let i = 0; i < users.length; i++) {
    if (isUserSatisfyAge(users[i])) {
      result.push(mapUserToString(users[i]));
    }
  }
  return result.join("\n");
}
