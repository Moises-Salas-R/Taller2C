import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private collectionName = 'tasks';

  constructor(private firestore: AngularFirestore) {}

  // Obtener todas las tareas
  getTasks(): Observable<Task[]> {
    return this.firestore.collection<Task>(this.collectionName).valueChanges({ idField: 'id' });
  }

  // Agregar una tarea
  addTask(task: Task): Promise<any> {
    return this.firestore.collection(this.collectionName).add(task);
  }

  // Actualizar una tarea
  updateTask(task: Task): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(task.id).update(task);
  }

  // Eliminar una tarea
  deleteTask(taskId: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(taskId).delete();
  }
}
