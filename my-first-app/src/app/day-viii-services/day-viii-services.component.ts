import { Component, OnInit } from '@angular/core';
import { DatetimeService } from './datetime.service';
import { GetinformationService } from './getinformation.service';

@Component({
  selector: 'app-day-viii-services',
  templateUrl: './day-viii-services.component.html',
  styleUrls: ['./day-viii-services.component.css']
})
export class DayViiiServicesComponent implements OnInit {

  constructor(private dt:DatetimeService, public getdata:GetinformationService) {}

  ngOnInit(): void {
  }

  // getdate=this.dt.today;
  getdate=this.dt.today();

  getinfo=this.dt.getdata();

  fname=this.dt.firstname;
  lname=this.dt.lastname;


  // Task 1 JSON Data through Service
  jsondata=this.getdata.jsondata;
  
  uname="";
  //Task 3 Input value Change
  onupdate()
  {
    this.getdata.getname(this.uname);
    // console.log(this.uname);
  }

  //ngForms
  // user:any={
  //   "name":'',
  //   "date":'',
  //   "gender":'',
  //   "class":'',
  //   "contact":''
  // }

  // onsubmit(user:any){
  //   this.user.name=user.name;
  //   this.user.date=user.date;
  //   this.user.gender=user.gender;
  //   this.user.class=user.class;
  //   this.user.contact=user.contact;
  //   console.log(this.user);
  // }

  // Task 5
  tempvar:any;
  v:any;
  tbl:any[]=[];

  printtable(value:any)
  { 
    for(let v=1;v<=10;v++)
    {
      this.tempvar=value*v;
      this.tbl[v]=value+" X "+ v +" = "+this.tempvar;
      // console.log(this.tbl[v]);
    }
  }

  //Task 6
  bookingFormdata:any={
    "fromname":"",
    "toname":"",
    "fromdate":"",
    "todate":""
  };

  calculate(data:any){
    alert(data.fromname);
    let date1: Date = new Date(data.fromdate);
    let date2: Date = new Date(data.todate);
    let timeInMilisec: number = date1.getTime() - date2.getTime();
    let daysBetweenDates: number = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));
    console.log("Total Cost for traveling from "+data.fromname+" to "+data.toname+" is : "+Math.abs(daysBetweenDates)*101+" $");
  }
}