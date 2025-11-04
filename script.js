const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach((cell) => {
    // Extract number safely (in case of editable text)
    const val = parseFloat(cell.textContent.trim()) || 0;
    total += val;
  });

  // Remove previous total row if already exists
  const oldAns = document.getElementById("ans");
  if (oldAns) oldAns.remove();

  // Create a new total row
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");

  const totalCell = document.createElement("td");
  totalCell.id = "ans"; // test expects this ID
  totalCell.colSpan = 2;
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
