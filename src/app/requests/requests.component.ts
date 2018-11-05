import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  @Input() requestList: Array<any>


  addMovie(moveiDetails) {
    console.log('Add Movie Function: ' + JSON.stringify(moveiDetails))
    document.getElementById('requestList')
  }

  constructor() { }

  ngOnInit() {
  }

}
