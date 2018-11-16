import { Component, OnInit, Input } from '@angular/core'
import { RequestService } from 'src/app/core/services/request.service'

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  @Input() requestList = []
  requests: any
  displayedColumns: string[] = ['title','release_date']

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    if (localStorage.getItem('requestList')) {
      this.requestList = JSON.parse(localStorage.getItem('requestList'))
    }
  }

  addMovie(movieDetails) {
    if (this.requestList.indexOf(movieDetails) == -1) {
      this.requestList.push(movieDetails)
      localStorage.setItem('requestList', JSON.stringify(this.requestList))
    }
  }

  submitRequest() {
    console.log('SUBMIT REQUESTS')
    this.requestService.getRequest()
      .then(doc => {
        console.log("Document data:", doc.data())
        this.requests = doc.data()
      })
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




}
