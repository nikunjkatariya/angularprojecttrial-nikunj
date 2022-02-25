import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    
  }

  itemsInCart =[{
      "id": 0,
      "imgurl":"./../assets/images/image4.jpg",
      "name": "XXX",
      "price": 0,
      "quantity": 0,
    },];

  totalcost=0;
  cost=0;
  counter=0;
  gatherdetail(product:any){
    this.itemsInCart.push(product);
    this.counter++;
    this.cost=product.quantity*product.price;
    this.totalcost+=this.cost;
  }
}

