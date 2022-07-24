import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';
  token!: string;

  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token')!
  }

}


// paso de informacion entre componentes
// 1. A traves de @inputs y @Outputs
// 2. A traves de inyeccion de constructores hijos @ViewChild, @ContentChild o @ContentChildren
// 3. A traves de Servicios (Promesas y Observables, etc) --> NGRX(gestion del estado de la aplicacion)
// 4. A traves de parametros entre rutas