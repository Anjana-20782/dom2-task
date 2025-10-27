
let Todo = [];
let filterType = "all"; // all, completed, pending

document.getElementById("add").addEventListener("click", () => {
  let task = document.getElementById("task").value.trim();

  if (task === "") 
    return alert("Enter your task name");

  // Add object with name + completed status
  Todo.unshift({ name: task, completed: false });
  document.getElementById("task").value = "";
  display();
});

function display() {
  let str = "";
  for (let i = 0; i < Todo.length; i++) {
    // manual filter (no filter/map)
    if (
      (filterType === "completed" && !Todo[i].completed) ||
      (filterType === "pending" && Todo[i].completed)
    ) {
      continue;
    }

    str += `
      <tr>
        <td>${i + 1}</td>
        <td>
          <input type="checkbox" 
            ${Todo[i].completed ? "checked" : ""} 
            onchange="toggleTask(${i})">
        </td>
        <td style="text-decoration: ${
          Todo[i].completed ? "line-through" : "none"
        }; color: ${Todo[i].completed ? "#aaa" : "#fff"};">
          ${Todo[i].name}
        </td>
        <td><button id="edit" onclick="editTask(${i})">Edit</button></td>
        <td><button id="delete" onclick="deleteTask(${i})">Delete</button></td>
      </tr>
    `;
  }
  document.getElementById("display").innerHTML = str;
}


}