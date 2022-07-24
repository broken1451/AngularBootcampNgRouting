import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// importamos el modelo de Taks
import { LEVELS, Task } from '../../models/task.interfaces';


@Component({
  selector: 'app-kabban-taks',
  templateUrl: './kabban-taks.component.html',
  styleUrls: ['./kabban-taks.component.scss'],
})
export class KabbanTaksComponent {

  constructor(){
    if (localStorage.getItem('todoCompleted')!) {
      this.done = JSON.parse(localStorage.getItem('todoCompleted')!);
    }
    if (localStorage.getItem('todo')!) {
      this.todo = JSON.parse(localStorage.getItem('todo')!);
    }
  }


  public todo: Task[] = [
    {
      title: 'Animaciones',
      description: 'Aprender Animaciones en angular',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'Angular cli',
      description: 'Aprender comandos  y configuraciones de Angular Cli',
      completed: false,
      level: LEVELS.URGENT
    },
    {
      title: 'Build',
      description: 'Aprender a generar build con Angular Cli',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Deploy',
      description: 'Aprender a desplegar bundles con Firebase',
      completed: false,
      level: LEVELS.BLOCKING
    },
  ]

  public done: Task[] = [
    // {
    //   title: 'VSC',
    //   description: 'Configurar e instalar plugins en vsc',
    //   completed: true,
    //   level: LEVELS.BLOCKING
    // },
    // {
    //   title: 'Instalar angular',
    //   description: 'Aprender a instalar con npm el Angular CLI',
    //   completed: true,
    //   level: LEVELS.BLOCKING
    // },
    // {
    //   title: 'Crear Hola mundo en Angular',
    //   description: 'Crear con agular cli un proyecto inicial',
    //   completed: true,
    //   level: LEVELS.URGENT
    // },
  ]


  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // actualizamos el valor de completed
      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        localStorage.setItem('todoCompleted', JSON.stringify(this.done))
        localStorage.setItem('todo', JSON.stringify(this.todo))
    }
  }
}
