import { FourthComponent } from './fourth/fourth/fourth.component';
import { ThirdComponent } from './third/third/third.component';
import { SecondComponent } from './second/second/second.component';
import { FirstComponent } from './first/first/first.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'first', component: FirstComponent},
  {path:'second', component: SecondComponent},
  {path:'third', component: ThirdComponent},
  {path:'fourth', component: FourthComponent},
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
