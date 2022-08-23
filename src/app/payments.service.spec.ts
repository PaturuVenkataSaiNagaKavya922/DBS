import { TestBed } from '@angular/core/testing';

 

import { PaymentsService } from './payments.service';
//import {Sender} from './payments.service'
//import { TransferService } from '../payments.service';
 

describe('PaymentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

 

  it('should be created', () => {
    const service: PaymentsService = TestBed.get(PaymentsService);
    expect(service).toBeTruthy();
  });
});