import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  myform:any;

  ngOnInit(): void {
    // this.myform = new FormGroup({
    //   name : new FormControl("Thomas"),
    //   email: new FormControl(),
    //   message: new FormControl()
    // });

    // Using Form Builder
    // this.myform=this.fb.group({
    //   name:'James', email:'',message:''
    // });

    //Using Validators
    this.myform=this.fb.group({
      name:['James',Validators.required], 
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required,Validators.minLength(15)]]
    });
  }

  onSubmit(form:FormGroup){
    console.log('valid?',form.valid);
    console.log("Name:",form.value.name,"Email:",form.value.email,"Message:",form.value.message);
  }
}
