import { Sender } from './payments';
 

describe('sender', () => {
  it('should create an instance', () => {
    expect(new Sender()).toBeTruthy();
  });
});

import { Receiver } from './payments';

describe('receiver',() => {
  it( 'should create an instance',() => {
    expect(new Receiver()).toBeTruthy();
  });
});
