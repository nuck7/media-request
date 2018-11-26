import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { RequestService } from 'src/app/core/services/request.service'
import { MatSort, MatTableDataSource, MatTable } from '@angular/material'

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  @Input() requestList = new MatTableDataSource()
  requests: any
  displayedColumns: string[] = ['title', 'date']
  //@ViewChild(MatTable) movieTable: MatTable<any>
  //@ViewChild(MatSort) sort: MatSort

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    /*if (this.router.url == '/search') {
      if (localStorage.getItem('requestList')) {
        this.requestList.data = JSON.parse(localStorage.getItem('requestList'))
      }
      this.requestList.sort = this.sort
    }*/
    this.requestService.getPreviousRequests('nchu')
      .subscribe(requests => {
        let tempArray = []
        requests.forEach(request => {
          //this.requestList.data.push(request)
          tempArray.push(request.data())
          //console.log(request.id, '=>', request.data());
        })
        //console.log(requests.docs[0].data)
        this.requestList.data = tempArray
      })
  }
}
