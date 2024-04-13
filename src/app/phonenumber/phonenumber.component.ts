import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';


@Component({
  selector: 'app-root',
  templateUrl: './phonenumber.component.html',
  styleUrl: './phonenumber.component.css'
})
export class PhonenumberComponent {
  phoneNumber: any;
  countrycode: string = "+1"; 

  public phoneform: any;
  submitted =false;
  phone_number = '';
  country_code = '';
  constructor(private formbuilder: FormBuilder, private appService: AppService) {
  }
  ngOnInit(): void {
    this.phoneform = this.formbuilder.group({
      phone_number: [''],
      country_code: ['']
    })
  }
  onSubmit(datas: any) {
    var params = {
      'phone_number': datas.phonenumber,
      'country_code': datas.countryCode

    }
    if (this.phoneform.valid) {
      this.appService.postmethod('auth/login', params).subscribe(result => {
        console.log(123)
      })
      console.log(datas)

    } else {
      console.log(datas)
    }
  }





}
