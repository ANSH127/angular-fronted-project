import { Component } from '@angular/core';
import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';

@Component({
  selector: 'app-myconfession',
  standalone: true,
  imports: [NavcardComponent,ProfilecardComponent],
  templateUrl: './myconfession.component.html',
  styleUrl: './myconfession.component.css'
})
export class MyconfessionComponent {

}
