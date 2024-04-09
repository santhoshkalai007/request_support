import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarratingComponent } from './starrating/starrating.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SubmitformComponent } from './submitform/submitform.component';


const routes: Routes = [
  { path:' ',redirectTo:'create'},
  {path:'create' ,component:SubmitformComponent},
  { path:'starrating',component:StarratingComponent},
  {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }