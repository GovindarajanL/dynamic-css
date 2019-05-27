import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DispCompComponent } from './disp-comp/disp-comp.component';

const routes: Routes = [{
  path: 'google',
  component: DispCompComponent
},{
  path:'yahoo',
  component:DispCompComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
