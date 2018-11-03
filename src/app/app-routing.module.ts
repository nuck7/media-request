import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './requests/requests.component';
import { RequestFormComponent } from './request-form/request-form.component';


const routes: Routes = [
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'search',
    component: RequestFormComponent
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
