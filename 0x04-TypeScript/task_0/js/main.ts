
// 1. Create two students as plain objects
const student1 = {
  firstName: "Douglas",
  lastName: "Barry",
  age: 27,
  location: "Nairobi",
};

const student2 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  location: "Mombasa",
};

// 2. Put them into an array
const studentsList = [student1, student2];

// 3. Render a table using DOM methods
const table = document.createElement("table");
table.border = "1"; // simple styling

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// 4. Append the table to the body
document.body.appendChild(table);
