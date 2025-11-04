const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".price");

  // Convert NodeList to array and sum up values
  let total = 0;
  prices.forEach((cell) => {
    total += Number(cell.textContent);
  });

  // Create a new table row for the total
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");

  // Create one cell that spans both columns
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;

  // Append cell to row and row to table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
