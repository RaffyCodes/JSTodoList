// Code goes here

var todoList = {
  todos: [],
  displayTodo: function() {
    console.log('My Todos:';
    for (var i = 0; i < this.todos.length; i++) {
     console.log(this.todos[i].todoText);  
    }
  },
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: False
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
     this.todos.splice(position, 1);
     this.displayTodos();
  },
  toggleCompleted: function(position)  {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
