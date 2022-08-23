import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { senderComponent } from './sender/sender.component';
import { TranferdetailsComponent } from './tranferdetails/tranferdetails.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ReceiverComponent } from './receiver/receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    senderComponent,
    TranferdetailsComponent,
    TransactionsComponent,
    ReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
