import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.interface';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { RandomUserService } from 'src/app/services/random-user.service';
import { Results, ContactRandom } from '../../models/random.user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  // public listContact: Contact[] = [];
  public filtroSex: string = 'todos'
  public listRandonContact!: Results;
  public listContact!: Results;
  public loading!: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private contactService: ContactService, private randomUserService: RandomUserService) {
    this.loading = true;
  }

  ngOnInit() {

    // obtener los queryparams
    this.activatedRoute.queryParams.subscribe(async (param) => {
      try {
        
        if (param.sex) {
          this.filtroSex = param.sex;
          if (param.sex == 'male' || param.sex == 'female' ) {
            console.log('param.sex ==>> ', param.sex)
            this.getRandomListContact(10,param.sex).subscribe(resp=>{
              this.listContact = resp;
              this.loading = false;
            });
          } else {
            this.getRandomListContact(10).subscribe(resp=>{
              this.listContact = resp;
              this.loading = false;
            });
          }
        }
        // obtenemos la lista de contactos
        // const resp = await this.contactService.obtenerContactos(this.filtroSex)
        // console.log({resp})
        // this.listContact = resp;

     
      } catch (error) {
        console.log(error)
      }
    });
  }

  // Ejemplo de paso de informacion entre componentes a traves del ESTADO
  backHome(contact: ContactRandom) {
    const navigationExtras: NavigationExtras = {
      state: {
        data: contact,
        filtroSex: this.filtroSex
      }
    }
    this.router.navigate(['/dashboard'], navigationExtras)
  }

  getRandomListContact(number: number, sex?: string): Observable<Results> {
    // implementacion para obtener la lista de contactos aleatorio
   return this.randomUserService.getRandomContact(number, sex);
  }

  
  getRandomListContactBySex(sex: string): Observable<Results> {
    // implementacion para obtener la lista de contactos aleatorio
   return this.randomUserService.getRandomContactByGender(sex);
  }

}
