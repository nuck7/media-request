import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../core/services/movie.service'
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  
  movieInput:string;
  movieResults:object;

  @ViewChild(CartComponent)
  private requests: CartComponent;
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchMovie(event: any) {
    this.movieInput = event.target.value
    console.log(JSON.stringify(event.target.value))
  
    this.movieService.searchMovies(this.movieInput)
    .subscribe((data:any) => {
      this.movieResults = data.results
    })
    return false;
  }

  passMovieDetails(selectedMovie) {
    console.log('passMovieDetails: ' + JSON.stringify(selectedMovie))
    this.requests.addMovie(selectedMovie);
  }
}
