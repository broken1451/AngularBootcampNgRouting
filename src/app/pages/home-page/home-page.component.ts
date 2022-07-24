import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Contact } from '../../models/contact.interface';
import { ContactRandom } from '../../models/random.user.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public contactSelected!: ContactRandom;
  public token!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // comprobar si existe el token
    this.token = sessionStorage.getItem('token')!;

    // Leemos del estado del historial de navegacion
    if (history.state.data) {
      this.contactSelected = history.state.data;
      console.log(history.state.data);
    }
  }


  goToContacts() {
    const navigationExtras:NavigationExtras = {
      queryParams:{
       sex: 'todos'
      }
    }
    this.router.navigate(['/dashboard/contacts'],navigationExtras);
  }
}
