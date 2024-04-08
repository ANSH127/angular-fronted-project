import { Component } from '@angular/core';
import { NavcardComponent } from '../navcard/navcard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
