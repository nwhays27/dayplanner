var $newTask = $("#new-task");
var $incompletedTasks = $("#incomplete-tasks");
var $completedTasks = $("#completed-tasks");
var $addButton = $("#add-button");

//This function allows the user to create a new list item
var makeNewListItem = function(taskToAdd) {

  var $newListItem = $("<li></li>");
  var $newCheckbox = $("<input type='checkbox' class='checkbox'>");
  var $newLabel = $("<label></label>");
  var $newEditInput = $("<input type='text' class='edit-text'>");
  var $newEditButton = $("<button class='edit-button'>Edit</button>");
  var $newDeleteButton = $("<button class='delete-button'>Delete</button>");

  $newListItem.append($newCheckbox)
  .append($newLabel.html(taskToAdd))
  .append($newEditInput)
  .append($newEditButton)
  .append($newDeleteButton);

  return $newListItem;
}

//add new list item to To-Do list when add-button is clicked.
$addButton.on( "click", function(){
  var listItemToAdd = makeNewListItem($newTask.val());

  //this will append the new list item to the list
  $incompletedTasks.append(listItemToAdd);
  $newTask.val("");
})

//delete item from the list on click
$incompletedTasks.on( "click", ".delete-button", function(){
  $(this).parent().remove();  
})


$completedTasks.on( "click", ".delete-button", function(){
  $(this).parent().remove();  
})

// tried for a function to edit the tasks.. doesnt work sometimes
var editTask = function (list, input, label){
 
  if (list.hasClass("editMode")) {
    list.removeClass("editMode");
    label.text(input.val());
  } else {
    list.addClass("editMode");
    input.val(label.text());
  }
}


$incompletedTasks.on( "click", ".edit-button", function(){
  var $list = $(this).parent();  
  var $input = $(this).prev();
  var $label = $input.prev();
  editTask($list, $input, $label);
})

$completedTasks.on( "click", ".edit-button", function(){
  var $list = $(this).parent();  
  var $input = $(this).prev();
  var $label = $input.prev();
  editTask($list, $input, $label);
})

