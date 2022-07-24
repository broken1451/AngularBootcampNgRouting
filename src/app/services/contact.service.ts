import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.interface';
import { Observable } from 'rxjs';
import { listContact } from '../mocks/contact,mock';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public listContacto: Contact[] = listContact;


  constructor() { }


  obtenerContactos(sex?: string): Promise<Contact[]> {
    return new Promise((resolve, reject) => {
      if (sex == 'hombre' || sex == 'mujer') {
        let listcontactFilter: Contact[] = this.listContacto.filter(c => c.sex == sex);
        resolve(listcontactFilter);
      } else if (sex == 'todos') {
        resolve(this.listContacto);
      } else {
        reject('No hay nada que regresar, filtro no valido');
      }
    })
  }
}
