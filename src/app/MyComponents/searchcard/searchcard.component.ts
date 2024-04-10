import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";

@Component({
  selector: 'app-searchcard',
  standalone: true,
  imports: [NgHeroiconsModule,CommonModule,FormsModule],
  templateUrl: './searchcard.component.html',
  styleUrl: './searchcard.component.css'
})
export class SearchcardComponent {
  searchinput:String = "";
  constructor() {}

  search() {
    console.log("searching for: ", this.searchinput);
  }
}
