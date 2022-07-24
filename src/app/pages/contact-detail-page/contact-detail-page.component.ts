import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactRandom } from 'src/app/models/random.user.interface';
import { Contact } from '../../models/contact.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {

  public id: any;
  public contact!: ContactRandom;
  public filtroPrevio: string ='todos';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // vamos a leer los parametros
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = params.id
      }
    });

    // vamos a leer el state del state 
    console.log({state: history.state.data})
    if (history.state.data) {
      this.contact = history.state.data.contact;
    }

    if (history.state.data.filtroSex) {
      this.filtroPrevio = history.state.data.filtroSex;
    }
  }

}
