import { Component, OnInit } from '@angular/core';
import { ToDo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todolist: ToDo[] = [
    {task: 'FeedDogs', completed: true},
    {task: 'Eat Dinner', completed: false},
    {task: 'check on dinner', completed: false}
  ]
  newtask: string = '';
  newcompleted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.todolist.push({task: this.newtask, completed: this.newcompleted})
    this.newtask = '';
    this.newcompleted;
  }
  completeTask(myitem:ToDo)
  {
    myitem.completed = true;
  }
  DeleteTask(myitem:ToDo)
  {
    //sad that myitem.splice didn't work probably due to the incorrect type being used
    this.todolist.splice;
  }

}
