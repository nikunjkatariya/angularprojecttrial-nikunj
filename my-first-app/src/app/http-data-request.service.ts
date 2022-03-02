import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HttpDataRequestService {

  constructor(private ht:HttpClient) {  }

  getdata(){
    return this.ht.get("https://jsonplaceholder.typicode.com/users ");
  }

  getlocaldata(){
    return this.ht.get("http://localhost:3000/employees");
  }

  getdatabyid(id:any){
    return this.ht.get("http://localhost:3000/employees/"+id);
  }

  PostDataService(Form:FormGroup){
    return this.ht.post("http://localhost:3000/employees",Form);
  }
}
