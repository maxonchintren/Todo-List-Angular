import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
// Tasks List
  public tasks;

  public title = 'angular-todo-list';

ngOnInit() {

  if (localStorage[0] === undefined) {
    localStorage.setItem('tasks', JSON.stringify([{
      id: 1,
      value: 'Добавить первое дело!',
      isChecked: false,
      isImportant: false,
    }]))
  } 

  this.tasks = JSON.parse(localStorage.getItem('tasks' || '[]'));
  console.log(this.tasks)
  window.addEventListener('unload', () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }, {once: true})
}


// Method for adding new tasks in list => in DOM
  addTodoItem() {
    const inputTask = <HTMLInputElement>document.querySelector('.add-todo-item__input');
    let taskImportance = <HTMLInputElement>document.querySelector('.important-check');
    let taskId: number = this.tasks.length - 1;
    
    if (inputTask.value.length === 0 || inputTask.value.trim() === '') {
      inputTask.value = '';
      inputTask.placeholder = 'Поле не должно быть пустым!'
      return false;
    }
    
    if (taskImportance.checked === true) {
      this.tasks.unshift({
        id: taskId,
        value: inputTask.value,
        isChecked: false,
        isImportant: taskImportance.checked,
      });
    } else {
        this.tasks.push({
          id: taskId,
          value: inputTask.value,
          isChecked: false,
          isImportant: taskImportance.checked,
        });
    }
    inputTask.value = '';
  }

 // Delete Task Methods
  deleteTask(todoElement) {
    let index = <number>this.tasks.indexOf(todoElement);
	  setTimeout(() => this.tasks.splice(index, 1), 350);
  }

  deleteAll() {
    this.tasks = [];
  }
  
  // Checking importance
  public taskImportance = false;
    importantCheck() {
      this.taskImportance = !this.taskImportance;
    }  
  }
