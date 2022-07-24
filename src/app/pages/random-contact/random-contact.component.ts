import { Component, OnInit } from '@angular/core';
import { Results } from 'src/app/models/random.user.interface';
import { RandomUserService } from 'src/app/services/random-user.service';
import { ContactRandom } from '../../models/random.user.interface';

@Component({
  selector: 'app-random-contact',
  templateUrl: './random-contact.component.html',
  styleUrls: ['./random-contact.component.scss']
})
export class RandomContactComponent implements OnInit {

  public randomContact!: ContactRandom;

  constructor(private randonUserService: RandomUserService) { }

  ngOnInit(): void {
    this.randonUserService.getRandomUser().subscribe((res: Results) => {
      this.randomContact = res.results[0]; // se lo pasamos al random contact
      console.log(res)
    });
  }

  getNewContact(){
    this.randonUserService.getRandomUser().subscribe((res: Results) => {
      this.randomContact = res.results[0]; // se lo pasamos al random contact
      console.log(res)
    }, (e=>console.log({e})));
  }

  obtenerListaContacto(n: number){
    this.randonUserService.getRandomContact(n).subscribe((res)=> {
      console.log({res})
    })
  }

  obtenerListaContactoBySex(n: number){
    this.randonUserService.getRandomContact(n).subscribe((res)=> {
      console.log({res})
    })
  }

}
