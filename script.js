class Task {
  constructor(desc) {
    this.desc = desc;
  }
}

class Todolist {
  constructor() {
    this.tasks = [];
  }
  addTasks(desc) {
    const task = new Task(desc);
    this.tasks.push(task);
    this.renderTasks();
  }
  deleteTasks(index) {
    this.tasks.splice(index, 1); //Удаляет задачу из массива по индексу
    this.renderTasks();
  }

  renderTasks() {
    const ulNode = document.querySelector("#taskList");
    ulNode.innerHTML = ``;
    this.tasks.forEach((el) => {
      ulNode.innerHTML += `<li class="task"><span class="task-text">${el.desc}</span><button class="delete-btn">Delete</button></li>`;
    });
    const delBtnNode = document.querySelectorAll(".delete-btn"); /// находим все кнопки
    delBtnNode.forEach((el, index) => {
      el.addEventListener("click", (e) => {
        this.deleteTasks(index);
      });
    });
  }
}
const todoList = new Todolist();

document.querySelector("#addTaskBtn").addEventListener("click", () => {
  const taskInput = document.querySelector("#taskInput");
  const description = taskInput.value.trim();
  if (description !== "") {
    todoList.addTasks(description);
    taskInput.value = "";
  }
});
