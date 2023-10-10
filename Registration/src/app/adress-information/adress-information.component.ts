import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adress-information',
  templateUrl: './adress-information.component.html',
  styleUrls: ['./adress-information.component.css']
})
export class AdressInformationComponent implements OnInit {
  adressInformationForm!:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: Router){}

  ngOnInit(): void {
    this.createadressInformationForm();
  }

  createadressInformationForm(){
    this.adressInformationForm = this.formBuilder.group({
      street:[''],
      zipcode:[''],
      city:['']
    });
  }


  saveadressInformation(){
    console.log(this.adressInformationForm);
    this.route.navigate(['payment-information']); 
  }

  navigateToPersonalInformation(){
    this.route.navigate(['personal-information']); 

  }
}
