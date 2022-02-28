import { Component, OnInit } from '@angular/core';
import { GetinformationService } from './../getinformation.service';

@Component({
  selector: 'app-servicedatachange',
  templateUrl: './servicedatachange.component.html',
  styleUrls: ['./servicedatachange.component.css']
})
export class ServicedatachangeComponent implements OnInit {

  constructor(public getdata:GetinformationService) { }

  ngOnInit(): void {
  }
  // Task 2
  jsondata=this.getdata.jsondata;

  //Task 3
  name=this.getdata.setname();

  regformdata=this.getdata.user;
}
