import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  count=0;
  clickcount(){
    this.count++;
  }

  btnvalue="";
  fillvalue(){
    this.btnvalue="Thomas";
  }

  imgUrl=".././assets/images/testimage.jpg";
  counter=1;
  first_name: string ='';
  savedata(){
    this.counter++;
    console.log('Name',this.first_name);
  }
}
