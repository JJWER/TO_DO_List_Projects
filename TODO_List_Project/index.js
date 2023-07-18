
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

//เก็บรายการงาน
let tasks = [];

//เพิ่มงาน
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push(taskText);
    taskInput.value = '';
    displayTasks();
  }
}

//แสดงรายการงาน
function displayTasks() {

  taskList.innerHTML = '';


  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">ลบ</button>
    `;
    taskList.appendChild(li);
  });
}

// ลบงานออก
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}