import { Injectable, Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  cart = new MatTableDataSource()

  @Output() change: EventEmitter<MatTableDataSource<Object>> = new EventEmitter()

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  searchMovies(title: string) {
    const APIKey = environment.tmdb_api_key
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + APIKey + '&language=en-US&query=' + title + '&page=1&include_adult=false')
  }

  addMovieToCart(movie) {
    let movieAlreadyInCart = false
    console.log(`Movie: ${JSON.stringify(movie)}`)
    for (let i=0; i<this.cart.data.length; i++) {
      if (this.cart.data[i].id == movie.id) {
        movieAlreadyInCart = true
      }
    }
    if (movieAlreadyInCart == false) {
      this.cart.data.push(movie)
      this.change.emit(this.cart)
      localStorage.setItem('requestList', JSON.stringify(this.cart.data))
      this.snackBar.open('Movie Added!', '', {
        duration: 2000,
      })
    }
    else {
      this.snackBar.open('That movie is already in your cart!', '', {
        duration: 2000,
      })
    }
  }
}
