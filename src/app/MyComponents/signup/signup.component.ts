import { Component } from '@angular/core';

import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchcardComponent } from '../searchcard/searchcard.component';
import { TrendingcardComponent } from '../trendingcard/trendingcard.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    NavcardComponent,
    ProfilecardComponent,
    CommonModule,
    FormsModule,
    RouterLink,
    SearchcardComponent,
    TrendingcardComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor() {}

  handleSignup = async () => {
    if (this.name === '' || this.email === '' || this.password === '') {
      alert('Please fill all the fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.name,
          email: this.email,
          password: this.password,
        }),
      });
      const data = await response.json();
      // console.log(data);
      
      if (data.message) {
        alert(data.message);
      } else {
        alert('Signup successful');
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.name = '';
      this.email = '';
      this.password = '';
    }
  };
}
