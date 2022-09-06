function makeFriendsList(friends) {
  let result = "";
  for (let i = 0; i < friends.length; i++) {
    result += `<li>${friends[i].firstName} ${friends[i].lastName}</li>`;
  }

  result = `<ul>${result}</ul>`;
  const ul = document.createElement("ul");
  ul.innerHTML = result;
  return ul;
}
