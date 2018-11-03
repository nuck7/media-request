import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service'

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  movieInput:string;
  movieResults:object;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchMovie(event: KeyboardEvent) {
    this.movieInput = event.target.value
    console.log(JSON.stringify(event.target.value))
  
    this.movieService.searchMovies(this.movieInput)
    .subscribe((data:object) => {
      console.log(JSON.stringify(data.results))
      this.movieResults = data.results
    })
    return false;
  }
}
