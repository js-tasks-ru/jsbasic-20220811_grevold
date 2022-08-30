function namify(users) {
  function getUserName(user) {
    return user.name;
  }
  return users.map(getUserName);
}
