import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm?:FormGroup;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
  saveUSerAddress(){
    this.accountService.updateUserAddress(this.checkoutForm.get('addressForm')?.value).subscribe({
      next:()=>{
        this.checkoutForm?.get('addressForm')?.reset(this.checkoutForm.get('addressForm')?.value);
      }
    })
  }
}
