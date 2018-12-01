import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../core/services/movie.service'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchResults: Array<any>
  //@Output() movieClicked = new EventEmitter()
  columns = 3

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  setColumns(event) {
    const element = event.target.innerWidth
    console.log(element)

    /*if (element > 1550) {
      this.columns = 5
    }

    else if (element > 1200) {
      this.columns = 4
    }
*/
    if (element > 1100) {
      this.columns = 3
    }

    else if (element > 600) {
      this.columns = 2
    }

    else {
      this.columns = 1
    }
  }

  addMovie(movie: Object) {
    console.log('addMovie() Called')
    this.movieService.addMovieToCart(movie)
  }
}
