import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@Component({
  selector: 'app-confessioncard',
  standalone: true,
  imports: [NgHeroiconsModule,CommonModule,FormsModule],
  templateUrl: './confessioncard.component.html',
  styleUrl: './confessioncard.component.css',
})



export class ConfessioncardComponent {
  @Input() confession: any;
  isLiked: Boolean = false;
  showComment: Boolean = false;
  comment: string = '';
  constructor() {}

  toggleLike() {
    console.log('Like button clicked');
    
    this.isLiked = !this.isLiked;
  }

  postComment() {
    console.log('Comment posted: ', this.comment);
    this.comment = '';
  }

  toggleComment() {
    console.log('Comment button clicked');
    this.showComment = !this.showComment;
  }
}
