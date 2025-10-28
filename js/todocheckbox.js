
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
    // filter
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
          <span id="taskname-${i}">${Todo[i].name}</span>
          <input type="text" id="edittext-${i}" value="${Todo[i].name}" style="display:none">
        </td>
        <td>
          <button id="edit-${i}" class="edite" onclick="editTask(${i})">Edit</button>
          <button id="save-${i}" class="savey" style="display:none" onclick="saveTask(${i})">Save</button>
        </td>
        <td><button id="delete-${i}" class="deletey" onclick="deleteTask(${i})">Delete</button></td>
      </tr>
    `;
  }
  document.getElementById("display").innerHTML = str;
}



// ✅ toggle completed/pending
function toggleTask(index) {
  Todo[index].completed = !Todo[index].completed;
  display();
}

function editTask(index) {
  let taskname = document.getElementById(`taskname-${index}`);
  let editText = document.getElementById(`edittext-${index}`);
  let editButton = document.getElementById(`edit-${index}`);
  let saveButton = document.getElementById(`save-${index}`);
  taskname.style.display = "none";
  editText.style.display = "block";
  editText.focus();
  editButton.style.display = "none";
  saveButton.style.display = "inline-block";
}


function saveTask(index) {
  let editText = document.getElementById(`edittext-${index}`);
  let newText = editText.value.trim();
  if (newText !== "") {
    Todo[index].name = newText;
    
  }
  display()
}

//  Delete task (without filter/map)
function deleteTask(index) {
  if (confirm(`Are you sure you want to delete "${Todo[index].name}"?`)) {
   Todo=Todo.filter((_,i)=> i!==index)
    display();
  }
}

//  Filter buttons
let buttons = document.querySelectorAll(".filter button");

for (let btn of buttons) {
  btn.addEventListener("click", () => {
    filterType = btn.textContent.toLowerCase(); // all / completed / pending
    for (let b of buttons) b.classList.remove("active");
    btn.classList.add("active");
    display();
  });
}