import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpDataRequestService } from './../http-data-request.service';

@Component({
  selector: 'app-http-data-request',
  templateUrl: './http-data-request.component.html',
  styleUrls: ['./http-data-request.component.css']
})
export class HttpDataRequestComponent implements OnInit {

  constructor(private ht:HttpDataRequestService,private fb:FormBuilder) { }

  ngOnInit(): void { 
    this.ht.getdata().subscribe((data)=>
    this.show(data)+console.log(data));

    this.ht.getlocaldata().subscribe((data)=>
    // this.details=data);
    this.showserverdata(data));
    
    this.PostMethodForm=this.fb.group({
      first_name:['',Validators.required], 
      last_name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10)]]
    });
  }

  htdata:any;
  show(data:any){
    // return this.htdata=data;
    return this.htdata=data;
  }

  details:any;
  showserverdata(data:any){
    return this.details=data;
  }

  id:any;
  dt:any;
  fname="";
  lname="";
  phone="";
  email="";
  fetchdata(){
    if(this.id>0){
      for(let i=0;i<this.details.length;i++){
        if(this.details[i].id==this.id){
          // alert(this.details[0].id);
          this.fname=this.details[i].first_name;
          this.lname=this.details[i].last_name;
          this.email=this.details[i].email;
          this.phone=this.details[i].phone;
          break;
        }
      }    
    }
    else{alert("Provide Proper ID");}
  }

  PostMethodForm:any;
  PostData(Form:FormGroup){
    this.ht.PostDataService(Form.value).subscribe((data)=>
    // this.showserverdata(data));
    this.showserverdata(data));
  }
}
