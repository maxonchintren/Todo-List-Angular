import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
// Tasks List
  public tasks = [
    {
      id: 1,
      value: 'Добавить свое первое дело!',
      isChecked: false,
      isImportant: false,
    },
  ];

  public title = 'angular-todo-list';
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
    console.log(taskImportance.checked)
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
