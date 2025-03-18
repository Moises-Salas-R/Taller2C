import { Component, ViewChild } from '@angular/core';
import { TaskListComponent } from './tasks/components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  @ViewChild(TaskListComponent) taskList!: TaskListComponent;

  constructor() {
    console.log('AppComponent cargado'); // Mensaje de prueba
  }

  ngAfterViewInit(): void {
    if (this.taskList) {
      this.taskList.ngOnInit();
    }
  }

  refreshTaskList(): void {
    if (this.taskList) {
      this.taskList.ngOnInit();
    }
  }
}
