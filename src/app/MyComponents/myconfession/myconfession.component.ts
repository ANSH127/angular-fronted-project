import { Component } from '@angular/core';
import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { ConfessioncardComponent } from '../confessioncard/confessioncard.component';
import { CommonModule } from '@angular/common';
import { SearchcardComponent } from '../searchcard/searchcard.component';

@Component({
  selector: 'app-myconfession',
  standalone: true,
  imports: [NavcardComponent,ProfilecardComponent,ConfessioncardComponent,CommonModule,SearchcardComponent],
  templateUrl: './myconfession.component.html',
  styleUrl: './myconfession.component.css'
})
export class MyconfessionComponent {

}
