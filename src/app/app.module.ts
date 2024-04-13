import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestlistModule } from './testlist/testlist.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ResponseComponent } from './response/response.component';
import { TestlistComponent } from './testlist/testlist.component';

const Routes: Routes=[
// {path:'',component:TestlistComponent},
{path:'getlist',component:TestlistComponent},

{path:'response/:id',component:ResponseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ResponseComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    MatCardModule,
    HttpClientModule,

    AppRoutingModule,
    RouterModule.forRoot(Routes),

    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    TestlistModule,

    
   ],
  providers: [AppService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
