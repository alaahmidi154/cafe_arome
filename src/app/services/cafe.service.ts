
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  private apiUrl = 'http://localhost:3000/reservations'; 

  constructor(private http: HttpClient) { }

  submitReservation(reservationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, reservationData);
  }
}