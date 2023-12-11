const todoList = [];
// const todoList = [
//   { name: "read a book", dueDate: "2022-12-22" },
//   { name: "wash dishes", dueDate: "2022-12-27" },
// ];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach((todoObject) => {
    const { name, dueDate } = todoObject; //destructuring

    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `; //generating HTML
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addTodo();
});
function addTodo() {
  const nameInputElement = document.querySelector(".js-name-input");
  const dueDateInputElement = document.querySelector(".js-due-date-input");

  const name = nameInputElement.value;
  const dueDate = dueDateInputElement.value;

  todoList.push({ name, dueDate });

  nameInputElement.value = "";

  renderTodoList();
}
