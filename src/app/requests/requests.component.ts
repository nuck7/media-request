import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { RequestService } from 'src/app/core/services/request.service'
import { MatSort, MatTableDataSource, MatTable } from '@angular/material'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { AuthService } from 'src/app/core/services/auth.service'

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

  constructor(private requestService: RequestService, private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.userDetails.email)
    this.requestService.getPreviousRequests(this.authService.userDetails.email)
      .subscribe(requests => {
        let tempArray = []
        requests.forEach(request => {
          tempArray.push(request.data())
        })
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