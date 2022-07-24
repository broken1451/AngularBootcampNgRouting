import { Component, Input, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { Results, ContactRandom } from '../../models/random.user.interface';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  @Input() randomContact!: ContactRandom;

  constructor() { }

  ngOnInit(): void {

  }

}
