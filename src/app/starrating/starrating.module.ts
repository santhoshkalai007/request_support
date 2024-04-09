import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarratingComponent } from './starrating.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    StarratingComponent
  ],
  imports: [
    CommonModule,
    MatIconModule

  ],
  exports:[
    StarratingComponent
  ]
})
export class StarratingModule { }
