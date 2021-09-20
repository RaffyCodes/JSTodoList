function grabTodo () {
    let userInput = document.getElementById("task");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    todos.appendChild(li);
    userInput.value = '';

}