import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  @Input() requestList = []


  addMovie(movieDetails) {
    console.log(JSON.stringify(this.requestList) + ' / ' + JSON.stringify(movieDetails) + ' / ' + this.requestList.indexOf(movieDetails))
    if (this.requestList.indexOf(movieDetails) == -1) {
      this.requestList.push(movieDetails)
      console.log(movieDetails.title + ' added to ' + JSON.stringify(this.requestList))
    }
  }

  /*checkForDuplicates(movieDetails) {
    for (var i = 0; i < this.requestList.length; i++) {
      let movieDetailsValues = Object.values(movieDetails)
      if (this.requestList[i] == o.x && arr[i].y == o.y) {
        return i;
      }
    }
    return -1;
  }*/


  constructor() { }

  ngOnInit() {
  }

}
