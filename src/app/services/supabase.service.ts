import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

import { environment } from '../../environments/environment';
export interface Reservation {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
}
@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl, 
      environment.supabasePublishableKey
    );
  }
  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  async createReservation(reservation: Reservation) {
    const { data, error } = await this.supabase
      .from('reservations')
      .insert([reservation]);
    if (error) throw error;
        return data;
  }

  // Fetch all reservations ordered by newest first
async getReservations() {
  const { data, error } = await this.supabase
    .from('reservations')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data || [];
}
// Update status of a specific reservation
async updateReservationStatus(id: string, status: string) {
  const { data, error } = await this.supabase
    .from('reservations')
    .update({ status })
    .eq('id', id)
    .select();
    if (error) throw error;
    return data;
}
}
