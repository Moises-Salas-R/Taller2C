import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Necesario para ngModel
    IonicModule,
    ReactiveFormsModule, 
  ],
  exports: [
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent
  ]
})
export class TasksModule { }
