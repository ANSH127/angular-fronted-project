import { Component } from '@angular/core';
import { ConfessioncardComponent } from '../confessioncard/confessioncard.component';
import { CommonModule } from '@angular/common';
import {Router } from '@angular/router';

@Component({
  selector: 'app-myconfession',
  standalone: true,
  imports: [
    ConfessioncardComponent,
    CommonModule,
  ],
  templateUrl: './myconfession.component.html',
  styleUrl: './myconfession.component.css',
})
export class MyconfessionComponent {
  confessions: any = [];
  isloding: boolean = false;
  
  constructor(private router: Router) {}

  fetchConfession = async () => {
    try {
      this.isloding = true;
      const response = await fetch(
        'https://angular-backend-y9ve.onrender.com/api/userconfessions',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      const data = await response.json();
      if (data.error) {
        alert(data.error);
        this.router.navigate(['/login']);
        return;
      }

      // reverse the array to show the latest confession first
      data.reverse();
      this.confessions = data;
      // console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      this.isloding = false;
    }
  };

  ngOnInit() {
    this.fetchConfession();
  }
}
