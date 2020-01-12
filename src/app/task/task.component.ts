import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

// Decorators
  @Input() task;

  @Output() deleteTasks: EventEmitter<any> = new EventEmitter();

// Inputs and Labels visibility for editing tasks
  public labelVis = true;
  public editButtonVis = true;
  public editInputVis = false;
  public saveButtonVis = false;
  public checkboxVis = true;

// Icons for Buttons
  public editButtonIcon = String.fromCharCode(9998);
  public saveButtonIcon = String.fromCharCode(10003);
  public deleteButtonIcon = String.fromCharCode(10007);
// Some stuff for task classes
  public unChecked = 'todo-item';
  public checked = 'todo-item-checked';

  isChecked() {
    const checkbox = <HTMLInputElement>document.querySelector('.complete-task');
    if (checkbox.checked) {
      return this.checked;
    }
    return this.unChecked;
  }

  check() { 
    this.editButtonVis= !this.editButtonVis;
  }
// _________________

  constructor() {}

  ngOnInit() {}

// Delete Event emition
  delete($event) {
    this.deleteTasks.emit();
    $event.target.parentElement.parentElement.style.transform = 'translateX(-1500px)';
  }
// Edit Method
  edit() {
    this.labelVis = false;
    this.editInputVis = true;
    this.editButtonVis = false;
    this.saveButtonVis = true;
    this.checkboxVis = !this.checkboxVis;
  }
// Save Method
  save() {
    const edittedTask = <HTMLInputElement>document.querySelector('.edit-input');

    if (edittedTask.value.length === 0 || edittedTask.value.trim() === '') {
      edittedTask.placeholder = 'Поле не должно быть пустым!';
      return false;
    }

    this.labelVis = true;
    this.editInputVis = false;
    this.editButtonVis = true;
    this.saveButtonVis = false;
    this.checkboxVis = !this.checkboxVis;

    this.task = edittedTask.value;
  }
}
