import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { RequestService } from 'src/app/core/services/request.service'
import { MatSort, MatTableDataSource, MatTable } from '@angular/material'
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class RequestsComponent implements OnInit {

  @Input() requestList = new MatTableDataSource()
  requests: any
  displayedColumns: string[] = ['requestor', 'date', 'status']
  expandedRequest: Request
  @ViewChild(MatSort) sort: MatSort

  constructor(private requestService: RequestService) { }

  ngOnInit() {
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

        this.requestList.sort = this.sort
      })
  }
}

export interface Request {
  title: string
  date: string
  status: string
}