import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from './Services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Pincode-Finder';
  submitted = false;
  shipForm: FormGroup;
  data =[];

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ){}

  ngOnInit(){
    this.shipForm = this.fb.group({
      fname:'',
      lname:'',
      pincode:'',
      city:'',
      state:'',
      country:''
    })
  }

  SetAddress(){
    this.submitted = true;
    this.api.getAddress(this.shipForm.get('pincode').value)
    .subscribe(data =>{
      console.log(data[0].PostOffice[0]);

      const address = data[0].PostOffice[0];

      this.shipForm.get('city').setValue(address.Block)
      this.shipForm.get('state').setValue(address.State)
      this.shipForm.get('country').setValue(address.Country)
    })
  }

  NewAddress(){
    this.submitted= true;
    // console.log(this.shipForm.value);
    this.data.push(this.shipForm.value);
    alert("Address saved successfully !");
    this.shipForm.reset();
  }
}
