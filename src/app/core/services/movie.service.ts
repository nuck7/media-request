import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  searchMovies(title:string) {
    const APIKey = environment.tmdb_api_key
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + APIKey + '&language=en-US&query=' + title + '&page=1&include_adult=false')
    .pipe(
        tap(movies => console.log('fetched movies')),
    )
  }
}
