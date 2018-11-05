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

  addMovieToList(event: any) {
    let movieDetails = event.target.parentNode.parentNode.firstChild.childNodes[1].innerHTML
    console.log('Movie Title: ' + movieDetails)
    this.movieClicked.emit(movieDetails)
    //console.log('Clicked add to list button: ' + JSON.stringify(event.target.parentNode.nodeName))
  }
}
