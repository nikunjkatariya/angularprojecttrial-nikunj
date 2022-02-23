import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  coverimgurl="./../assets/images/image1.jpg";

  cardimgurl1="./../assets/images/image2.jpg";
  cardimgurl2="./../assets/images/image3.jpg";
  cardimgurl3="./../assets/images/image4.jpg";
  cardimgurl4="./../assets/images/image5.jpg";
  ngOnInit(): void {
  }
}
