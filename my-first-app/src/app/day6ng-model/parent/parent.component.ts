import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemsent="Thomas";
  arraynamessender=["Nikunj","Sarthak","Ashish","Sujit"];

  counters=["0"];

  count=0;
  incrementcounter(newItem:string){
    this.counters.push(newItem);
    this.count++
  }
}
