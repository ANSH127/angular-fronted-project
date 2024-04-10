import { Component } from '@angular/core';

import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchcardComponent } from '../searchcard/searchcard.component';
import { TrendingcardComponent } from '../trendingcard/trendingcard.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,NavcardComponent,ProfilecardComponent,SearchcardComponent,TrendingcardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
