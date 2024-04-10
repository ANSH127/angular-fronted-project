import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profilecard',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './profilecard.component.html',
  styleUrl: './profilecard.component.css'
})
export class ProfilecardComponent {
  isLoggedin:boolean = true;
  constructor() {}

}
