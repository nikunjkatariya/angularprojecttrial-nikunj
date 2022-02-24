import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value:string){
    this.newItemEvent.emit(value);
  }

  image1url="./../assets/images/image1.jpg";
  
  @Output() product1Event = new EventEmitter();
    additem(){
      this.product1Event.emit();
    }

}
