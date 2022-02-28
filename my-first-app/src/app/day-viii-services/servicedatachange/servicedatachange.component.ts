import { Component, OnInit } from '@angular/core';
import { GetinformationService } from './../getinformation.service';

@Component({
  selector: 'app-servicedatachange',
  templateUrl: './servicedatachange.component.html',
  styleUrls: ['./servicedatachange.component.css']
})
export class ServicedatachangeComponent implements OnInit {

  constructor(private getdata:GetinformationService) { }

  ngOnInit(): void {
  }

  jsondata=this.getdata.jsondata;
}
