import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact.interface';
import { ContactRandom } from '../models/random.user.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contact: ContactRandom, args?: any): string {
    return `${contact.name.title} ${contact.name.first} ${contact.name.last}`
  }

}
