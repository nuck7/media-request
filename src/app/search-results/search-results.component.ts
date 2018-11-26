import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchResults: Array<any>
  @Output() movieClicked = new EventEmitter()
  columns = 3

  constructor() { }

  ngOnInit() {
    let matCardElement = document.getElementsByClassName('mat-card')[0]
    console.log(matCardElement)
    //let matCardElementWidth = matCardElement.innerWidth
  }

  setColumns(event) {
    const element = event.target.innerWidth
    console.log(element)

    if (element > 1550) {
      this.columns = 5
    }

    else if (element > 1200) {
      this.columns = 4
    }

    else if (element > 850) {
      this.columns = 3
    }

    else if (element > 600) {
      this.columns = 2
    }

    else {
      this.columns = 1
    }
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
