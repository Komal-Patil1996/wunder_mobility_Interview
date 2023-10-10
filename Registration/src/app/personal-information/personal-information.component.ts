import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit{
  personalInformationForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private route:Router){

  }

  ngOnInit(): void {
    this.createPersonalInformationForm();
  }

  createPersonalInformationForm(){
    this.personalInformationForm = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      telephone:['']
    });
  }
  
  savePersonalInformation(){
    console.log(this.personalInformationForm);
    this.route.navigate(['adress-information']);
  }
}
