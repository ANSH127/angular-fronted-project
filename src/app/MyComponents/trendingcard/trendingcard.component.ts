import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trendingcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trendingcard.component.html',
  styleUrl: './trendingcard.component.css',
})
export class TrendingcardComponent {
  confessions: any = [];
  fetchTrending = async () => {
    try {
      const response = await fetch(
        'https://angular-backend-y9ve.onrender.com/api/trendingconfessions',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      const data = await response.json();
      // console.log('Trending data: ', data);

      if (data.error) {
        alert(data.error);
        return;
      }

      this.confessions = data
    } catch (error) {
      console.error('Error fetching trending: ', error);
    }
  };

  ngOnInit() {
    this.fetchTrending();
  }
}
