import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { senderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import  { Transferdetailscomponent} from './tranferdetails/tranferdetails.component'
import { TransactionsComponent } from './transactions/transactions.component';
import * as i1 from "@angular/router";


const routes: Routes = [
   {path: '' , component: CustomerComponent},
  //{path:"customer" , component: CustomerComponent},
  
  {path:"Payments" , component:senderComponent},
  {path:"Transcations" , component:TransactionsComponent},
  {path: "Next", component:Transferdetailscomponent},
  {path:"NEXT", component:ReceiverComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
