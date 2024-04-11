import { Component } from '@angular/core';
import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { ConfessioncardComponent } from '../confessioncard/confessioncard.component';
import { CommonModule } from '@angular/common';
import { SearchcardComponent } from '../searchcard/searchcard.component';
import { TrendingcardComponent } from '../trendingcard/trendingcard.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavcardComponent,
    ProfilecardComponent,
    ConfessioncardComponent,
    CommonModule,
    SearchcardComponent,
    TrendingcardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  confessions: any = [];

  constructor() {}

  ngOnInit() {
    // fetch the confessions
    this.getConfessions();
  }

  getConfessions = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/confessions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();
      this.confessions = data;
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}
