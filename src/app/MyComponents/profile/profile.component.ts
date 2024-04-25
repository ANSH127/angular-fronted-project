import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  

  constructor(private router: Router, private route: ActivatedRoute) {}

  user: any = {};
  isloading: boolean = true;
  id: String ='';
  apiurl:String = 'https://angular-backend-y9ve.onrender.com/api/getuserdetails';

  fetchUser = async () => {

    if(this.id) {
      this.apiurl = `https://angular-backend-y9ve.onrender.com/api/getuserdetailsbyid/${this.id}`;
    }


    try {
      const url = new URL(this.apiurl.toString());
      const response = await fetch(url, {
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
    console.log('profile component');
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.fetchUser();
      
    });

  }
}
