/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement("table");
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>`;
    const tbody = document.createElement("tbody");
    this.elem.appendChild(thead);
    this.elem.appendChild(tbody);
    rows.forEach((row) => {
      const newRow = document.createElement("tr");
      const button = document.createElement("button");
      button.innerHTML = "X";
      button.addEventListener("click", function () {
        const tr = this.closest("tr");
        tr.parentElement.removeChild(tr);
      });
      const buttonTd = document.createElement("td");
      buttonTd.appendChild(button);
      newRow.innerHTML = `
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.salary}</td>
      <td>${row.city}</td>
      `;
      newRow.appendChild(buttonTd);
      tbody.appendChild(newRow);
    });
  }
}
