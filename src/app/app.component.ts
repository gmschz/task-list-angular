import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTask: string = '';
  tasks: { name: string; done: boolean }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, done: false });
      this.newTask = '';
    }
  }

  toggleTask(task: { name: string; done: boolean }) {
    task.done = !task.done;
  }
}
