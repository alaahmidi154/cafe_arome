import { Component } from '@angular/core';
import { CafeService } from '../services/cafe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  submitted = false;

  form = {
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 2
  };

  constructor(private cafeService: CafeService) {}

  onSubmit() {
  console.log('Form submitted:', this.form);
  
  // Log the service to make sure it's injected
  console.log('Service:', this.cafeService);
  
  this.cafeService.submitReservation(this.form).subscribe({
    next: (res) => {
      console.log('Success:', res);
      this.submitted = true;
      setTimeout(() => this.submitted = false, 4000);
      // Reset form after success
      this.form = { name: '', email: '', date: '', time: '', guests: 2 };
    },
    error: (err) => {
      console.error('Error details:', err);
      alert(`Error: ${err.message}`);
    }
  });
}
}