import { Component, OnInit } from '@angular/core';
import { DatetimeService } from './datetime.service';
import { GetinformationService } from './getinformation.service';

@Component({
  selector: 'app-day-viii-services',
  templateUrl: './day-viii-services.component.html',
  styleUrls: ['./day-viii-services.component.css']
})
export class DayViiiServicesComponent implements OnInit {

  constructor(private dt:DatetimeService, private getdata:GetinformationService) {}

  ngOnInit(): void {
  }

  // getdate=this.dt.today;
  getdate=this.dt.today();

  getinfo=this.dt.getdata();

  fname=this.dt.firstname;
  lname=this.dt.lastname;


  // Task 1 JSON Data through Service
  jsondata=this.getdata.jsondata;
  
  chagedata()
  {
    for(let i=0;i<this.jsondata.length;i++)
    {
      this.getdata.jsondata[i].id+=5;
    }
    // console.log(this.jsondata.length);
  }
}
