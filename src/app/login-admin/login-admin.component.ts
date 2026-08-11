import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {
email = '';
  password = '';
  errorMessage = '';
  loading = false;

 
  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  async signIn() {
  this.errorMessage = '';
  this.loading = true;

  const { error } = await this.supabaseService.signIn(this.email, this.password);

  this.loading = false;

  if (error) {
    console.log('Actual Supabase error:', error); // temporary — check browser console
    this.errorMessage = 'Invalid email or password.';
    return;
  }

  this.router.navigate(['/admin']);
}
}



