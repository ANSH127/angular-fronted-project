import { Component } from '@angular/core';
import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { AddconfessionformComponent } from '../addconfessionform/addconfessionform.component';
import { SearchcardComponent } from '../searchcard/searchcard.component';
import { TrendingcardComponent } from '../trendingcard/trendingcard.component';

@Component({
  selector: 'app-addconfession',
  standalone: true,
  imports: [NavcardComponent,ProfilecardComponent,AddconfessionformComponent,SearchcardComponent,TrendingcardComponent],
  templateUrl: './addconfession.component.html',
  styleUrl: './addconfession.component.css'
})
export class AddconfessionComponent {

}
