import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchResults: Array<any>
  @Output() movieClicked = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  addMovieToList(movie: any) {
    console.log('Movie Title: ' + movie)
    this.movieClicked.emit({
      ...movie,
      year: movie.release_date.split('-')[0]
    })
    //console.log('Clicked add to list button: ' + JSON.stringify(event.target.parentNode.nodeName))
  }
}
