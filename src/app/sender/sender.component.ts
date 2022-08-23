import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentsService } from '../payments.service';
import { Sender } from '../payments';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class senderComponent implements OnInit {
  sender: Sender = new Sender();
  submitted = false;

 

  constructor(private paymentsService: PaymentsService,
    private router: Router) { }

 

  ngOnInit() {
  }
  //add functionality on create student

 

  newSender(): void {
    this.submitted = false;
    this.sender = new Sender();
  }
   //send or submit the ui value to backend
  save() {
    //calling service class from here
    this.paymentsService
    .sender(this.sender).subscribe(data => {
      console.log(data)
      this.sender = new Sender();
      this.gotoList();
    }, 
    error => console.log(error));
  }

 

  onSubmit() {
    this.submitted = true;
    this.save();    //calling save method is calling from here
  }

 

  //navigate to the functionality
   gotoList() {
    this.router.navigate(['/customer1']); 
  }

}