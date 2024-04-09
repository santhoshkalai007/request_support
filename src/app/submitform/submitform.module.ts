import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitformComponent } from './submitform.component';
import { ReactiveFormsModule,FormBuilder,FormGroup,FormsModule, } from '@angular/forms';


@NgModule({
  declarations: [
    SubmitformComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    SubmitformComponent 
  ]
})
export class SubmitformModule { }
