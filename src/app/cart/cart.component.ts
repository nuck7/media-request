import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { RequestService } from 'src/app/core/services/request.service'
import { MatSort, MatTableDataSource, MatTable } from '@angular/material'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/core/services/auth.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() requestList = new MatTableDataSource()
  requests: any
  displayedColumns: string[] = ['title', 'release_date', 'remove']
  @ViewChild(MatSort) sort: MatSort

  constructor(private requestService: RequestService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('requestList')) {
      this.requestList.data = JSON.parse(localStorage.getItem('requestList'))
    }
    this.requestList.sort = this.sort
  }

  addMovie(movieDetails) {
    let movieList = JSON.parse(localStorage.getItem('requestList'))
    if (movieList.findIndex(indexMovieToRemove => indexMovieToRemove.id == movieDetails.id) == -1) {
      this.requestList.data.push(movieDetails)
      this.requestList.data = [...this.requestList.data]
      //Look into using this instead of the line above this.movieTable.renderRows()
      localStorage.setItem('requestList', JSON.stringify(this.requestList.data))
    }
  }

  removeMovie(movie) {
    let movieList = JSON.parse(localStorage.getItem('requestList'))
    let indexMovieToRemove = movieList.findIndex(indexMovieToRemove => indexMovieToRemove.id == movie.id)
    this.requestList.data.splice(indexMovieToRemove, 1)
    this.requestList.data = [...this.requestList.data]
    localStorage.setItem('requestList', JSON.stringify(this.requestList.data))
  }

  submitRequest() {
    this.requestService.submitRequest({name: this.authService.userDetails.displayName, email:this.authService.userDetails.email}, this.requestList.data)
    localStorage.setItem('requestList', '[]')
    this.requestList.data = []
    this.requestList.data = [...this.requestList.data]
  }
}