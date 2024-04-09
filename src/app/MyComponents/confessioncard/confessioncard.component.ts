import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@Component({
  selector: 'app-confessioncard',
  standalone: true,
  imports: [NgHeroiconsModule,CommonModule],
  templateUrl: './confessioncard.component.html',
  styleUrl: './confessioncard.component.css',
})
export class ConfessioncardComponent {
  isLiked: Boolean = false;
  constructor() {}

  toggleLike() {
    console.log('Like button clicked');
    
    this.isLiked = !this.isLiked;
  }
}
