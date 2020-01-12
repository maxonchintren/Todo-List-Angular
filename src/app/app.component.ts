import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
// Tasks List
  public tasks = ['Добавить свое первое дело!'];

  public title = 'angular-todo-list';
// Method for adding new tasks in list => in DOM
  addTodoItem() {
    const inputTask = <HTMLInputElement>document.querySelector('.add-todo-item__input');
    if (inputTask.value.length === 0 || inputTask.value.trim() === '') {
      inputTask.value = '';
      inputTask.placeholder = 'Поле не должно быть пустым!'
      return false;
    }
    this.tasks.push(inputTask.value);
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
