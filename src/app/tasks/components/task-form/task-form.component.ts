import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  standalone:false
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<void>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        ...this.taskForm.value,
        done: false
      };
      this.taskService.addTask(newTask).then(() => {
        this.taskForm.reset();
        this.taskAdded.emit();
      });
    }
  }
}
