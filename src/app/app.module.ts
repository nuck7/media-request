import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { RequestFormComponent } from './request-form/request-form.component'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { RequestsComponent } from './requests/requests.component'
import { SearchResultsComponent } from './search-results/search-results.component'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from '../environments/environment'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { CartComponent } from './cart/cart.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { AuthComponent } from './auth/auth.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    RequestFormComponent,
    RequestsComponent,
    SearchResultsComponent,
    NavbarComponent,
    CartComponent,
    AuthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebase_config),
    AngularFirestoreModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatMenuModule,
    MatSelectModule,
    AngularFireAuthModule,
    MatDialogModule,
    MatSnackBarModule
    
  ],
  entryComponents: [CartComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
