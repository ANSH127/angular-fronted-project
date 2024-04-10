import { Component } from '@angular/core';

import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchcardComponent } from '../searchcard/searchcard.component';
import { TrendingcardComponent } from '../trendingcard/trendingcard.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavcardComponent,ProfilecardComponent,CommonModule,FormsModule,RouterLink,SearchcardComponent,TrendingcardComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name: string='';
  email: string='';
  password: string='';
  constructor() { }

  handleSignup() {
    if(this.email == '' || this.password == '' || this.name == '') {
      alert('Please fill all the fields');
      return;
    }

    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
  }

}
