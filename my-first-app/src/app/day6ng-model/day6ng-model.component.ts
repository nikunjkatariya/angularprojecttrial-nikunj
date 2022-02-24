import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day6ng-model',
  templateUrl: './day6ng-model.component.html',
  styleUrls: ['./day6ng-model.component.css']
})
export class Day6ngModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fname="";
  lname="";
  dob="";
  hasvalue(){
    if(this.fname!="")
      return true;
    else
      return false;
  }

  numarrays= [20,10,53,40,31];
  namearrays = ["Nik","Sarthak","Naynesh","Dhruv","Madhusudan","Sujit","Ashish"];
}

