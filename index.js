function newTask() {
  var li = document.createElement("li");
  var addTask = document.getElementById("addTask").value;
  var add = document.createTextNode(addTask);
  li.appendChild(add);
  var check = document.createElement("input");
  check.type = "checkbox";

  check.classList.add("needDone");
  //check.onclick = taskDone();
  //check.name = "todo[]";
  li.appendChild(check);
  if (addTask === "") {
    alert("Can't be blank!");
  } else {
    document.getElementById("tasks").appendChild(li);
  }

  document.getElementById("addTask").value = "";
}

function taskDone() {
  var numberOfTasks = document.querySelectorAll(".needDone").length;
  var toDoTasks = document.querySelectorAll(".needDone");
  //var doneTasks;
  console.log(toDoTasks);
  //get elements from the to do list and set a value to completed list
  toDoTasks.forEach((task, index) => {
    var checked = task.checked;
    console.log(toDoTasks);
    if (checked) {
      var li = document.createElement("li");
      toDoTasks[index].innerText = li;
      var add = document.createTextNode(addTask);
      //doneTasks.push(li);

      document.getElementById("completed").appendChild(li);
    }
  });

  var li = document.createElement("li");
  var tasks = document.getElementById("tasks").value;
  var moveTask = document.createTextNode(li);

  //add the new value to the completed list

  //remove the element from the to do list
}
function taskRemove() {}

//   var li = document.createElement("li");
//   var taskDone = document.createTextNode(completed);
//   li.appendChild(taskDone);
//   li.appendChild(check);
//   document.getElementById("completed").appendChild(li);
