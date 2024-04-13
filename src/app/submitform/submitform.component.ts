import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-root',
  templateUrl: './submitform.component.html',
  styleUrl: './submitform.component.css'
})
export class SubmitformComponent  {
  processing = false;
  showsuccessmessage = false;

  public reactiveform: any;
  title = 'angularone'
  submitted = false;
  name: any;
  email: any;
  details: any;
  subject: any;
  company_name: any;
  phone_no: any;
  country_code: any;
  country_name: any;

  constructor(private formBuilder: FormBuilder,
    public appservice: AppService) {
      this.appservice.getmethod('queries/Getlist').subscribe(res => {


      });



    this.appservice.getmethod('queries/Getlist').subscribe(result => {

    });

  }

  ngOnInit(): void {
    this.reactiveform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', (Validators.required, Validators.email)],
      phone_no: ['', Validators.required],
      company_name: [''],
      details: [''],
      subject: [''],
      country_code: ['+91'],
      country_name: ['india'],


    })


  }
  showSuccessMessage = false;
  onSubmit(datas: any) {
    var params = {
      'name': datas.name,
      'email': datas.email,
      'phone_no': datas.phone_no,
      'company_name': datas.name,
      'details': datas.details,
      'subject': datas.subject,
      'country_code': datas.country_code,
      'country_name': datas.country_name,
    }


    if (this.reactiveform.valid) {
      this.appservice.postmethod('queries/Create', params).subscribe(result => {
        console.log(123)
      })
      console.log(datas)
    } else {
      console.log(datas)
      this.processing = false;
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.processing = false;
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = true;
        }, 2000);
      }, 4000)
    }
  }

}
