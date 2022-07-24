import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.interfaces';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() item!: Task

  constructor() { }

  ngOnInit(): void {
  }

}
