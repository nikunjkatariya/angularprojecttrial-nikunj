import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jsondata=[
    {
      "id": 1,
      "imgurl":"./../assets/images/image1.jpg",
      "name": "Rice",
      "price": 100,
      "quantity": 10,
    },
    {
      "id": 2,
      "imgurl":"./../assets/images/image2.jpg",
      "name": "Snacks",
      "price": 30,
      "quantity": 17,
    },
    {
      "id": 3,
      "imgurl":"./../assets/images/image3.jpg",
      "name": "Tea",
      "price": 50,
      "quantity": 21,
    },
    {
      "id": 4,
      "imgurl":"./../assets/images/image4.jpg",
      "name": "Chocolate",
      "price": 37,
      "quantity": 13,
    }
  ];

  @Output() newItemEvent = new EventEmitter<any>();
  additem(value:any){
    this.newItemEvent.emit(value);
  }
}
