const taskInput = document.querySelector(".task-input input"),
  filter = document.querySelectorAll(".filter span"),
  clearAll = document.querySelector(".clear-btn"),
  taskBox = document.querySelector(".task-box");
let todos = JSON.parse(localStorage.getItem("todo-list"));

function showToDoList() {
  let li = "";
  todos.forEach((todo, id) => {
    li += `
        <li class="task">
              <label for="${id}" class="my-label">
                <div class="label-div">
                  <input type="checkbox" id="${id}" />
                  <p>${todo.name}</p>
                </div>
                <div class="settings">
                  <i class="fa-solid fa-ellipsis"></i>
                  <ul class="task-menu">
                    <li><i class="fa-solid fa-pen"></i> Edit</li>
                    <li><i class="fa-sharp fa-solid fa-trash"></i>Delete</li>
                  </ul>
                </div>
              </label>
            </li>
        `;
  });
  taskBox.innerHTML = li;
}
showToDoList();

taskInput.addEventListener("keyup", (e) => {
  let userTask = taskInput.value.trim();
  if (e.key == "Enter" && userTask) {
    if (!todos) {
      todos = [];
    }
    let taskInfo = { name: userTask, staus: "pending" };
    todos.push(taskInfo);

    taskInput.value = "";
    localStorage.setItem("todo-list", JSON.stringify(todos));

    showToDoList();
  }
});
