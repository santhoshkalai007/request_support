import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-root',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  star: number[] = [1, 2, 3, 4, 5];


  public feedback: any;
  submitted = false;
  feedbacks: any;
  starRating = 0;
  currentRate = 3.14;
  constructor(private formbuilder: FormBuilder, private appService: AppService) {


  }
  ngOnInit(): void {
    this.feedback = this.formbuilder.group({
      feedbacks: [''],
      rating: ['']
    })
  }

  onSubmit(datas: any) {
    var params = {
      'feedback': datas.feedbacks,
      'rating': datas.rating

    }
    if (this.feedback.valid) {
      this.appService.postmethod('queries/response/feedback/13', params).subscribe(result => {
        console.log(123)
      })
      console.log(datas)

    } else {
      console.log(datas)
    }
  }



}




