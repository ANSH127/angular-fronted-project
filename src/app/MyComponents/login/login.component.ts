import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isloding: boolean = false;

  constructor(private router: Router) {}

  handleLogin = async () => {
    if (this.email == '' || this.password == '') {
      alert('Please fill all the fields');
      return;
    }
    try {
      this.isloding = true;
      const data = { email: this.email, password: this.password };
      const response = await fetch('https://angular-backend-y9ve.onrender.com/api/login', {
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
        localStorage.setItem('uid', data2._id);

        alert('Login successful');
        window.location.href = '/';
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      this.isloding = false;
    }
  };
}
