import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AdressInformationComponent } from './adress-information/adress-information.component';
import { PaymentInformationComponent } from './payment-information/payment-information.component';

const routes: Routes = [{path:'personal-information',component:PersonalInformationComponent},
                        {path:'adress-information',component:AdressInformationComponent},
                        {path:'payment-information',component:PaymentInformationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
