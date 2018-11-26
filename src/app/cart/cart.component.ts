import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { RequestService } from 'src/app/core/services/request.service'
import { MatSort, MatTableDataSource, MatTable } from '@angular/material'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() requestList = new MatTableDataSource()
  requests: any
  displayedColumns: string[] = ['title', 'release_date', 'remove']
  //@ViewChild(MatTable) movieTable: MatTable<any>
  @ViewChild(MatSort) sort: MatSort

  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit() {
    //if (this.router.url == '/search') {
    if (localStorage.getItem('requestList')) {
      this.requestList.data = JSON.parse(localStorage.getItem('requestList'))
    }
    this.requestList.sort = this.sort
    //}
    /*else if (this.router.url == '/requests') {
      this.requestService.getPreviousRequests('nchu')
      .subscribe(requests => {
        requests.forEach(request => {
          console.log(request.id, '=>', request.data());
        });
        //console.log(requests.docs[0].data)
      })
    }*/
  }

  addMovie(movieDetails) {
    /*if (!localStorage.getItem('requestList')) {
      localStorage.setItem('requestList', '')
    }*/
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
    console.log('SUBMIT REQUEST')
    this.requestService.submitRequest('nchu', this.requestList.data)
    localStorage.setItem('requestList', '[]')
    this.requestList.data = []
    this.requestList.data = [...this.requestList.data]
  }
}