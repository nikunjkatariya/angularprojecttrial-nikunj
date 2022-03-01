import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { 
  }

  myForm:any;
  
  bookingForm:any;

  date = new Date();
  dd = String(this.date.getDate()).padStart(2, '0');
  mm = String(this.date.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.date.getFullYear();
  fromdate=this.yyyy+"-"+this.mm+"-"+this.dd;


  ngOnInit(): void {
    //Using FormControl and Validators
    // this.myForm = new FormGroup({
    //   name : new FormControl("Thomas",Validators.required),
    //   email: new FormControl('',[Validators.required,Validators.email]),
    //   city: new FormControl('',Validators.required),
    //   age: new FormControl(18,[Validators.required,Validators.min(18)]),
    //   contact:new FormControl('',[Validators.required,Validators.minLength(10)])
    // });

    //Using FormBuilder and Validators
    this.myForm=this.fb.group({
      name:['James',Validators.required], 
      email:['abc@abc.abc',[Validators.required,Validators.email]],
      city:['Surat',Validators.required],
      age:[18,[Validators.required,Validators.min(18)]],
      contact:['',[Validators.required,Validators.minLength(10)]]
    });

    //For Booking System
    this.bookingForm=this.fb.group({
      name:['James',Validators.required], 
      email:['abc@abc.abc',[Validators.required,Validators.email]],
      city:['Surat',Validators.required],
      contact:['',[Validators.required,Validators.minLength(10)]],
      fromname:['',Validators.required],
      toname:['',Validators.required],
      fromdate:[this.fromdate,Validators.required],
      todate:['',Validators.required]
    });
  }

  onSubmit(form:FormGroup){
    console.log(form.valid);
    //For Simple Form
    console.log("Name: ",form.value.name);
    console.log("Email: ",form.value.email);
    console.log("City: ",form.value.city);
    console.log("Age: ",form.value.age);
    console.log("Contact: ",form.value.contact);
  }
  
  //For Booking Form Which is Created in day-viii-services
  calculate(form:FormGroup){
    console.log(form.valid);
    let date1: Date = new Date(form.value.fromdate);
    let date2: Date = new Date(form.value.todate);
    let timeInMilisec: number = date1.getTime() - date2.getTime();
    let daysBetweenDates: number = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));
    console.log("Name: ",form.value.name);
    console.log("Email: ",form.value.email);
    console.log("City: ",form.value.city);
    console.log("Contact: ",form.value.contact);
    console.log("Total Cost for traveling from "+form.value.fromname+" to "+form.value.toname+" is : "+Math.abs(daysBetweenDates)*101+" $");
  }
}
