import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router } from '@angular/router';

export class list {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone_no: number,
    public company_name: string,
    public subject: string,
    public details: string,

  ) { }
}
@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrl: './testlist.component.css'
})
export class TestlistComponent implements OnInit {

  testList!: list[];
  lists: any;
  result: boolean = false;
  constructor(
    private appService: AppService,
    public router: Router
  ) { }
  ngOnInit(): void {
    this.appService.getmethod('queries/Getlist').subscribe(result => {
      console.log(result);
      this.lists = result.response;
      console.log(this.lists);

      this.appService.view_details = [];
      this.appService.view_details = this.lists
    })
  }

  onClick(i: any) {
    this.router.navigate(['/response', i])
    console.log('clicked');
  }
}

