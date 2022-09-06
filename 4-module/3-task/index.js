function highlight(table) {
  function changeTr(tr) {
    const tds = tr.querySelectorAll("td");
    const statusTd = tds[3];
    const genderTd = tds[2];
    const ageTd = tds[1];
    if (statusTd.getAttribute("data-available") === "true") {
      tr.classList.add("available");
    }
    if (statusTd.getAttribute("data-available") === "false") {
      tr.classList.add("unavailable");
    }
    if (statusTd.getAttribute("data-available") === null) {
      tr.setAttribute("hidden", "");
    }
    if(genderTd.innerHTML === 'm'){
      tr.classList.add("male");
    }
    if(genderTd.innerHTML === 'f'){
      tr.classList.add("female");
    }
    if(ageTd.innerHTML<18){
      tr.style="text-decoration: line-through";
    }
  }

  const rows = table.querySelectorAll("tr"); //массив строк
  for (let i = 0; i < rows.length; i++) {
    changeTr(rows[i]);
  }
}

// массив ячеек внутри i-той строки
