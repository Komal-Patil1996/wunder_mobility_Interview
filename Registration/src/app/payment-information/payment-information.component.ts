import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.css']
})
export class PaymentInformationComponent implements OnInit {
  paymentInformationForm!:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: Router){}

  ngOnInit(): void {
    this.createPaymentInformationForm();
  }

  createPaymentInformationForm(){
    this.paymentInformationForm = this.formBuilder.group({
      accountOwner:[''],
      iban:['']
    });
  }


  savePaymentInformation(){
    console.log(this.paymentInformationForm);
  }

  navigateToAdressInformation(){
    this.route.navigate(['adress-information']); 

  }
}
