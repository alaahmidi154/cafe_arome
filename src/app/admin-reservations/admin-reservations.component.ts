import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../services/supabase.service';
import { Router } from '@angular/router';
export interface ReservationRow{
  id: string;
  created_at: string;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
}
@Component({
  selector: 'app-admin-reservations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-reservations.component.html',
  styleUrls: ['./admin-reservations.component.scss']
})

export class AdminReservationsComponent implements OnInit {
  private supabaseService = inject(SupabaseService);
  // State Signals
  reservations = signal<ReservationRow[]>([]);
  searchQuery = signal<string>('');
  selectedStatusFilter = signal<string>('All');
  isLoading = signal<boolean>(true);

  filteredReservations = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const filter = this.selectedStatusFilter();
    return this.reservations().filter(res => {
      const matchesSearch = res.name.toLowerCase().includes(query) || res.email.toLowerCase().includes(query);
      const matchesStatus = filter === 'All' || res.status === filter;
      return matchesSearch && matchesStatus;
    });
  });
  async ngOnInit() {
    await this.loadReservations();
  }
  async loadReservations() {
    this.isLoading.set(true);
    try {
      const data = await this.supabaseService.getReservations();
      this.reservations.set(data as ReservationRow[]);
    } catch (err: any) {
      alert('Error fetching reservations: ' + err.message);
    } finally {
      this.isLoading.set(false);
    }
  }
  async changeStatus(id: string, newStatus: 'Confirmed' | 'Cancelled' | 'Pending') {
    try {
      await this.supabaseService.updateReservationStatus(id, newStatus);
   
      this.reservations.update(list => list.map(r => r.id === id ? { ...r, status: newStatus } : r)
      );
    } catch (err: any) {
      alert('Failed to update status: ' + err.message);
    }
  }
  private router = inject(Router);
    async logOut() {
    await this.supabaseService.signOut();
    this.router.navigate(['/login']);
  }
}


