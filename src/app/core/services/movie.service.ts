import { Injectable, Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  cart = new MatTableDataSource()

  @Output() change: EventEmitter<MatTableDataSource<Object>> = new EventEmitter()

  constructor(private http: HttpClient) { }

  searchMovies(title: string) {
    const APIKey = environment.tmdb_api_key
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + APIKey + '&language=en-US&query=' + title + '&page=1&include_adult=false')
  }

  addMovieToCart(movie) {
    this.cart.data.push(movie)
    this.change.emit(this.cart)
    localStorage.setItem('requestList', JSON.stringify(this.cart.data))
  }
}
