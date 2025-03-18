import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  standalone:false

})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      console.log('Tareas obtenidas:', tasks);
      this.tasks = tasks;
    });
  }

  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId);
  }

  

}
