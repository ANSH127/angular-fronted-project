import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { NavcardComponent } from './MyComponents/navcard/navcard.component';
import { ProfilecardComponent } from './MyComponents/profilecard/profilecard.component';
import { SearchcardComponent } from './MyComponents/searchcard/searchcard.component';
import { TrendingcardComponent } from './MyComponents/trendingcard/trendingcard.component';
import { CommonModule } from '@angular/common';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NavcardComponent,ProfilecardComponent,SearchcardComponent,TrendingcardComponent,CommonModule,NgHeroiconsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  isloading: boolean = false;
  isdark: boolean = false;

  toggleTheme = () => {
    this.isdark = !this.isdark;
  }
  
  ngOnInit() {

    // setTimeout(() => {
    //   this.isloading = false;
    // }, 1000);
  }
}
