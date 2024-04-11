import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@Component({
  selector: 'app-searchcard',
  standalone: true,
  imports: [NgHeroiconsModule, CommonModule, FormsModule],
  templateUrl: './searchcard.component.html',
  styleUrl: './searchcard.component.css',
})
export class SearchcardComponent {
  searchinput: String = '';
  userlist: any = [];
  searchlist:any = [];
  constructor() {}

  search() {
    if(this.searchinput === '') {
      this.searchlist = [];
      return;
    }
    this.searchlist = this.userlist.filter((user:any) => {
      return user?.username?.toLowerCase().includes(this.searchinput.toLowerCase());
    });
  }

  fetchAllUsers = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/fetchallusers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();
      // console.log('Users data: ', data);

      if (data.error) {
        alert(data.error);
        return;
      }

      this.userlist = data;
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };

  ngOnInit() {
    this.fetchAllUsers();
  }
}
