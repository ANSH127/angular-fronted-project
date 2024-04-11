import { Component } from '@angular/core';

import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchcardComponent } from '../searchcard/searchcard.component';
import { TrendingcardComponent } from '../trendingcard/trendingcard.component';
import {Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    NavcardComponent,
    ProfilecardComponent,
    SearchcardComponent,
    TrendingcardComponent,
    

  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  

  constructor(private router: Router) {}

  user: any = {};

  fetchUser = async () => {
    try {
      const response = await fetch('https://angular-backend-y9ve.onrender.com/api/getuserdetails', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();
      this.user = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  handleLogout =  () => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  };


  ngOnInit() {
    this.fetchUser();
  }
}
