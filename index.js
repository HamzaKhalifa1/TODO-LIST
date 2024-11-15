class Todo {
    name='empty';
    todo = [];

    constructor(name, todo = []) {
        this.name = name;
        this.todo = todo;
    }

    addTodo(newTodo) {
        this.todo.push({ newTodo, done: false });
    }

    deleteTodo(todoIndex) {
        if (todoIndex >= 0 && todoIndex < this.todo.length) {
            this.todo.splice(todoIndex, 1);
        } else {
            console.log('Your Task not found');
        }
    }

    completeTodo(todoIndex) {
        if (todoIndex >= 0 && todoIndex < this.todo.length) {
            this.todo[todoIndex].done = true;
        } else {
            console.log('Your Task not found');
        }
    }

    print() {
        console.log('Your Task is: '+this.name);
        console.log('List of tasks:');
        this.todo.forEach((item, index) => {
            console.log((index + 1) + '. ' + item.newTodo + ' - ' + (item.done ? 'Done' : 'Not Done'));
        });
    }
}


let todo1 = new Todo('Hamza');
todo1.addTodo('create pc');
todo1.addTodo('Complete homework');
todo1.print();
todo1.completeTodo(0);
todo1.print();
todo1.deleteTodo(1);
todo1.print();
todo1.deleteTodo(0);
todo1.print();