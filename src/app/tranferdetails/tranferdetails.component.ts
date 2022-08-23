import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { TransferService } from '../payments.service';
//import { transferdetails } from '../payments';



@Component({
  selector: 'app-tranferdetails',
  templateUrl: './tranferdetails.component.html',
  styleUrls: ['./tranferdetails.component.css']
})
export class Transferdetailscomponent implements OnInit {

 

  transfertype: transferdetails = new transferdetails();
  next= false;

 

  constructor(private TransferService: TransferService,
    private router: Router) { }

 

  ngOnInit(): void {
  }
newtransfertype(): void {
  this.next = false;
  this.transfertype = new Transferdetails();
}
onnext(){
  this.next = true;
}


}

/*
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../payments.service';
import { Transfertype } from '../payments';

 

@Component({
  selector: 'app-create-employee',
  templateUrl: './transfertype.component.html',
  styleUrls: ['./transfertype.component.css']
})
export class Transfertypecomponent implements OnInit {

 

  transfertype: Transfertype = new Transfertype();
  next= false;

 

  constructor(private TransferService: TransferService,
    private router: Router) { }

 

  ngOnInit(): void {
  }
newtransfertype(): void {
  this.next = false;
  this.transfertype = new Transfertype();
}
onnext(){
  this.next = true;
}
}*/
