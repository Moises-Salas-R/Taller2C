import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone:false
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<string>();

  constructor(private taskService: TaskService) {}

  toggleCompletion(): void {
    this.task.done = !this.task.done;
    this.taskService.updateTask(this.task);
  }
}
