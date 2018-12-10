import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './requests/requests.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { AuthGuard } from 'src/app/core/services/auth.guard'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'requests',
    component: RequestsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: RequestFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  
  /*,
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'register', 
    component: RegisterComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'user', 
    component: UserComponent, 
    resolve: { data: UserResolver } 
  }*/
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
