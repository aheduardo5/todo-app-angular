import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  listaTareas: Tarea[] = [];
  tareasTerminadas: Tarea[]=[];
  nombreTarea = '';
  emptyTask: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  agregarTarea() {
    // Crear un objeto tarea
    const Tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    };
    if (this.nombreTarea !== '') {
      this.emptyTask = false;
      //Agregar el objeto tarea al array
      this.listaTareas.push(Tarea);
      // Resetear el form
      this.nombreTarea = '';
    }else{
      this.emptyTask = true;
    }
  }
  eliminarTarea(index:number):void{
    this.listaTareas.splice(index,1)
  }
 
  actualizarTarea(tarea: Tarea, index: number):void{
    this.listaTareas[index].estado = !tarea.estado;
    let tareaFinalizada = this.listaTareas.splice(index,1);
    this.tareasTerminadas.push(...tareaFinalizada);
    console.log(this.tareasTerminadas)
  }
}
