import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ArchiveTask, PinTask, TasksState } from '../state/task.state';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';

@Component(({
  selector: 'app-task-list',
  template: `
    <div class="list-items">
      <app-pure-task-list
        [tasks]="tasks$ | async"
        (onArchiveTask)="archiveTask($event)"
        (onPinTask)="pinTask($event)"
      >
      </app-pure-task-list>
    </div>
  `
}))
export class TaskListComponent {
  @Select(TasksState.getAllTasks) tasks$: Observable<Task[]>;

  constructor(private store: Store) {}

  archiveTask(id: string): void {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: string): void {
    this.store.dispatch(new PinTask(id));
  }
}
