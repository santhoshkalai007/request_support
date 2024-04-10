import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrl: './response.component.css'
})
export class ResponseComponent {
  responseform: any;
  lists: any;
  id = '';
  name = '';
  email='';
  phone_no='';
  company_name='';
  subject='';
  details='';
  constructor(public appService: AppService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }
  ngOnInit() {

    this.responseform = this.fb.group({
      response_message: ['', Validators.required],

    })
   
    this.id = this.route.snapshot.url[1]['path'];

    console.log(this.appService.view_details)

    for (let i = 0; i < this.appService.view_details.length; i++) {
      if (this.id == this.appService.view_details[i]['id']) {
        console.log(this.appService.view_details[i])
        this.name = this.appService.view_details[i]['name'],
        this.email = this.appService.view_details[i]['email'],
        this.phone_no = this.appService.view_details[i]['phone_no'],
        this.company_name = this.appService.view_details[i]['company_name'],
        this.subject = this.appService.view_details[i]['subject'],
        this.details = this.appService.view_details[i]['details']
      }
      // const element = this.appService.view_details[i];
    }
  }

  responsesubmit(datas: any) {
    console.log(datas)
    // var id = this.route.snapshot['_urlSegment']['segments'][1].path
    this.appService.postmethod('queries/response' + '/' + this.id, datas).subscribe(result => {
      console.log(result)
    })
  }
}
