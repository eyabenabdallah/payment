import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Id: string = '';
  amount: number = 0;  // Track the entered amount

  constructor(private router: Router) {} // ✅ Inject Router

  onSubmit() {
    console.log('Login button clicked');
    console.log('Id:', this.Id);
    console.log('Password:', this.amount);

    if (this.Id === '11') {
      // Navigate to the dashboard with the amount as a query parameter
    this.router.navigate(['/dashboard'], { queryParams: { amount: this.amount } });
    } else {
      alert('Invalid credentials!');
    }
  }
}
