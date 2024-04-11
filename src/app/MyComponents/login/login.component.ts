import { Component } from '@angular/core';

import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchcardComponent } from '../searchcard/searchcard.component';
import { TrendingcardComponent } from '../trendingcard/trendingcard.component';
@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor() {}

  handleLogin = async () => {
    if (this.email == '' || this.password == '') {
      alert('Please fill all the fields');
      return;
    }
    try {
      const data = { email: this.email, password: this.password };
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const data2 = await response.json();
      // console.log(data2);
      if (data2.message) {
        alert(data2.message);
      } else {
        // set the token in local storage
        localStorage.setItem('token', data2.token);

        alert('Login successful');
      }
    } catch (error) {
      console.log(error);
    }
  };
}
