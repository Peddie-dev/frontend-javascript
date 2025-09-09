// main.ts

// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Douglas",
  lastName: "Barry",
  age: 27,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  location: "Mombasa",
};

// 3. Put them into an array
const studentsList: Student[] = [student1, student2];

// 4. Render a table using Vanilla JS (DOM API)
const table = document.createElement("table");
table.border = "1"; // optional border

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

// 5. Append the table to the body
document.body.appendChild(table);
