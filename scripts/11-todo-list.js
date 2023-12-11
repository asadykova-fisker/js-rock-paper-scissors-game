const todoList = [];
// const todoList = [
//   { name: "read a book", dueDate: "2022-12-22" },
//   { name: "wash dishes", dueDate: "2022-12-27" },
// ];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name
    // const dueDate = todoObject.dueDate
    const { name, dueDate } = todoObject; //destructuring

    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i},1)
        renderTodoList()
        " class="delete-todo-button">Delete</button>
    `; //generating HTML
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const nameInputElement = document.querySelector(".js-name-input");
  const dueDateInputElement = document.querySelector(".js-due-date-input");

  const name = nameInputElement.value;
  const dueDate = dueDateInputElement.value;

  todoList.push({ name, dueDate });

  nameInputElement.value = "";

  renderTodoList();
}
