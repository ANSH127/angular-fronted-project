import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  isloding: boolean = false;

  constructor(private router: Router) {}

  handleSignup = async () => {
    if (this.name === '' || this.email === '' || this.password === '') {
      alert('Please fill all the fields');
      return;
    }

    try {
      this.isloding = true;
      const response = await fetch('https://angular-backend-y9ve.onrender.com/api/signup', {
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
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.name = '';
      this.email = '';
      this.password = '';
      this.isloding = false;
    }
  };
}
