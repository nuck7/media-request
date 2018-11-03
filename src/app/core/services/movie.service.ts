import { Injectable, Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  searchMovies(title:string) {
    const APIKey = 'eed9b7963b5195abf73a54543e95159b';
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + APIKey + '&language=en-US&query=' + title + '&page=1&include_adult=false')
    .pipe(
        tap(movies => console.log('fetched movies')),
    )
  }
}
