import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addconfessionform',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addconfessionform.component.html',
  styleUrl: './addconfessionform.component.css'
})
export class AddconfessionformComponent {
  name: string = 'Anonymous';
  confession: string = '';

  constructor() {}

  addConfession() {
    if (this.confession == '') {
      alert('Please enter a confession');
      return;
    }
    console.log('Name: ' + this.name + ' Confession: ' + this.confession);
  }

}
