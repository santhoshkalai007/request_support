import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormBuilder,FormGroup,FormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FeedbackModule } from './feedback/feedback.module';
 import { ControlComponent } from './control/control.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { StarratingComponent } from './starrating/starrating.component';
import { SubmitformComponent } from './submitform/submitform.component';
import { PhonenumberModule } from './phonenumber/phonenumber.module';
@NgModule({
  declarations: [
    AppComponent,
     ControlComponent,
     StarratingComponent,
     SubmitformComponent
     
  ],
  imports: [ 
    FeedbackModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PhonenumberModule,
    NgbModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
