import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  amountPaid: string = 'USDT = 52.133233 EGP'; 
  paymentMethod: string = 'TRON (TRC20)';
  transactionId: string = ' يرجى إرسال العملات الرقمية من نوع TRC20 فقط إلى هذا العنوان.'; // Example transaction ID
  isCopied: boolean = false; // To show/hide "Copied" message
  amount: number = 0;  // Store the amount received from the query parameter


  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the amount from the query parameters
    this.route.queryParams.subscribe(params => {
      this.amount = params['amount'];  // Retrieve the amount from the URL query params
    });
  }

  copyToClipboard() {
    const textToCopy = document.getElementById('billing-address')?.innerText;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        this.isCopied = true;
        // Hide the "Copied" message after 2 seconds
        setTimeout(() => {
          this.isCopied = false;
        }, 2000);
      });
    }
  }
}
