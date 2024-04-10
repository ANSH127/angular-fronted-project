import { Component } from '@angular/core';
import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { ConfessioncardComponent } from '../confessioncard/confessioncard.component';
import { CommonModule } from '@angular/common';
import { SearchcardComponent } from '../searchcard/searchcard.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavcardComponent,ProfilecardComponent,ConfessioncardComponent,CommonModule,SearchcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
