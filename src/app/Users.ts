export class Users
{
    custid: string;
    AccntHolderName : string;
    Clearbalance : string;
    TransferType : string;
    OverDraft: number;
    

    constructor(custid, AccntHolderName, Clearbalance,TransferType, OverDraft)
    {
        this.custid = custid;
        this.AccntHolderName = AccntHolderName;
        this.Clearbalance = Clearbalance;
        this.TransferType = TransferType;
        this.OverDraft= OverDraft;
        
    }

}