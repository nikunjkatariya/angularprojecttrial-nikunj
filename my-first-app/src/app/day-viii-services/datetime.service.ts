import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }

  // today = new Date;
  today()
  {
    return Date();
  }  

  names:any;
  getdata()
  {
    this.names=["Thomas","Mosh","Jonshon"];
    return this.names
  }

  firstname="Thomas";
  lastname="Dueo";
}
