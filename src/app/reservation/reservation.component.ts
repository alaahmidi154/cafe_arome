import { Component } from '@angular/core';
import { CafeService } from '../services/cafe.service';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../services/supabase.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  form = {
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1
  };

 isSubmitting = false;
  constructor(private supabaseService: SupabaseService) {}
  async onSubmit(formValue: any) {
    console.log(formValue);
    
    this.isSubmitting = true;
    try {
      await this.supabaseService.createReservation({
        name: formValue.name,
        email: formValue.email,
        date: formValue.date,
        time: formValue.time,
        guests: Number(formValue.guests)
      });
      setTimeout(() => this.isSubmitting = false, 4000);
      this.form = { name: '', email: '', date: '', time: '', guests: 1 };
      alert('Reservation submitted successfully!');
    } catch (error: any) {
      alert('Error submitting reservation: ' + error.message);
    } finally {
      this.isSubmitting = false;
    }
  }
}
