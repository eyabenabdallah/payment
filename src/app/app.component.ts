import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {

    console.log('Login button clicked'); // ✅ Debugging
    console.log('Email:', this.email); 
    console.log('Password:', this.password);

    if (this.email === 'eya@gmail.com' && this.password === 'eya') {
      this.router.navigate(['/dashboard']); // Redirect to dashboard
    } else {
      alert('Invalid credentials!'); // Show an error message
    }
  } 
}
