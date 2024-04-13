import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonenumberComponent } from './phonenumber.component';
import { RouterModule } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormBuilder,FormGroup,FormsModule, } from '@angular/forms';



@NgModule({
  declarations: [
    PhonenumberComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbRatingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    PhonenumberComponent
  ]
})
export class PhonenumberModule { }
