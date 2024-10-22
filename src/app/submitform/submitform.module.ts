import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitformComponent } from './submitform.component';
import { RouterModule } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormBuilder,FormGroup,FormsModule, } from '@angular/forms';



@NgModule({
  declarations: [
    SubmitformComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbRatingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    SubmitformComponent
  ]
})
export class SubmitformModule { }
