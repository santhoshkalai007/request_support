import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { RouterModule } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormBuilder,FormGroup,FormsModule, } from '@angular/forms';


@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbRatingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    FeedbackComponent
  ]
})
export class FeedbackModule { }
