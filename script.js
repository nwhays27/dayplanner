var addTaskButton = document.getElementById("add-task-button");
var newTaskInput = document.getElementById("new-task-input");
var todolistContainer = document.getElementById("todolist-container");
var templateElement = document.getElementById("list-item-template");
var template = templateElement.innerHTML;

addTaskButton.addEventListener('click', function(event) {
  var taskName = newTaskInput.value;
  newTaskInput.value = "";

  var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
  todolistContainer.insertAdjacentHTML('afterbegin', taskHTML);
});
