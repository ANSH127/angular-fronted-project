import { Component } from '@angular/core';
import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { ConfessioncardComponent } from '../confessioncard/confessioncard.component';
import { CommonModule } from '@angular/common';
import { SearchcardComponent } from '../searchcard/searchcard.component';
import { TrendingcardComponent } from '../trendingcard/trendingcard.component';
import {Router } from '@angular/router';

@Component({
  selector: 'app-myconfession',
  standalone: true,
  imports: [
    NavcardComponent,
    ProfilecardComponent,
    ConfessioncardComponent,
    CommonModule,
    SearchcardComponent,
    TrendingcardComponent,
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
        'http://localhost:4000/api/userconfessions',
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
