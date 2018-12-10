import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { CartComponent } from '../cart/cart.component'
import { AuthService } from  '../core/services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog, public authService: AuthService) { }

  ngOnInit() {
  }

  openCart() {
    const dialogRef = this.dialog.open(CartComponent, {
      height: '60%',
      width: '60%',
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
