import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceiverService } from '../payments.service';
import {Receiver } from '../payments';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  customer: Receiver = new Receiver();
  pay = false;
  constructor(private customerService: ReceiverService,
    private router: Router) { }

 

  ngOnInit(): void {
  }
  newCustomer(): void {
    this.pay = false;
    this.customer = new Receiver();
  }
  onPay(){
    this.pay = true; 
  }
  
}
/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../payments.service';
import {Customer } from '../payments';

 

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer = new Customer();
  pay = false;
  constructor(private customerService: CustomerService,
    private router: Router) { }

 

  ngOnInit(): void {
  }
  newCustomer(): void {
    this.pay = false;
    this.customer = new Customer();
  }
  onPay(){
    this.pay = true; 
  }
  
}*/
