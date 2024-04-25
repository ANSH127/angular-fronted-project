import { Component } from '@angular/core';
import { ConfessioncardComponent } from '../confessioncard/confessioncard.component';
import { CommonModule } from '@angular/common';
import {Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ConfessioncardComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  confessions: any = [];
  isloding: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // fetch the confessions
    this.getConfessions();
  }

  getConfessions = async () => {
    try {
      this.isloding = true;
      const response = await fetch('https://angular-backend-y9ve.onrender.com/api/confessions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();

      if (data.error) {
        alert(data.error);
        this.router.navigate(['/login']);
        return;
      }

      // reverse the array to show the latest confession first
      data.reverse();

      this.confessions = data;
    } catch (error) {
      console.log(error);
    } finally {
      this.isloding = false;
    }
  };
}
