import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addconfessionform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addconfessionform.component.html',
  styleUrl: './addconfessionform.component.css',
})
export class AddconfessionformComponent {
  name: string = 'Anonymous';
  confession: string = '';
  isloding: boolean = false;

  constructor() {}

  addConfession = async () => {
    if (this.confession == '') {
      alert('Please enter a confession');
      return;
    }
    const data = { name: this.name, description: this.confession };
    try {
      this.isloding = true;
      const response = await fetch('http://localhost:4000/api/addconfession', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
      });
      
      if (response.status === 201) {
        alert('Confession added successfully');
        this.confession = '';
      } else {
        alert('Failed to add confession');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    finally {
      this.isloding = false;
    }
  };
}
