import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    

  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  

  constructor(private router: Router) {}

  user: any = {};
  isloading: boolean = true;

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
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
    finally{
      this.isloading = false;
    
    }
  };

  handleLogout =  () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };


  ngOnInit() {
    this.fetchUser();
  }
}
