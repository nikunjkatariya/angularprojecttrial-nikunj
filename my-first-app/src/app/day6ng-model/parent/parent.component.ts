import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  count=0;
  incrementcounter(){
    this.count++;
  }

  image1url="./../assets/images/image1.jpg";
  image2url="./../assets/images/image2.jpg";
  image3url="./../assets/images/image4.jpg";

  @Output() newItemEvent = new EventEmitter();
  addNewItem(){
    this.newItemEvent.emit();
  }
  
  detailsstatus = false;

  show_details(){
    if(this.detailsstatus == false){
      this.detailsstatus = true;
    }else{
      this.detailsstatus = false;
    }
  } 
}
