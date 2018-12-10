import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(private http: HttpClient, private afs: AngularFirestore, private snackBar: MatSnackBar) {

    }

    getPreviousRequests(user) {
        let requestCollection = this.afs.collection('requests', ref => ref.where('requestor.email', '==', user))
        return requestCollection.get()
    }

    submitRequest(user, movieList) {
        let requestCollection = this.afs.collection('requests')
        let requestName = `${user}:${Date.now()}`
        requestCollection.add({ requestor: user, date: Date.now(), movies: movieList, status: "requested" })
            .then(() => {
                this.snackBar.open('Request Submitted!', '', {
                    duration: 2000,
                })
            })
            .catch((error) => {
                this.snackBar.open('Error Submitting Request: ' + error, '', {
                    duration: 2000,
                })
            })
    }

    updateRequestStatus(request_id, status) {
        let requestCollection = this.afs.collection('requests')
        requestCollection.doc(request_id).update({ status: status })
            .then(() => {
                this.snackBar.open('Request Status Updated!', '', {
                    duration: 2000,
                })
            })
            .catch((error) => {
                this.snackBar.open('Error Updating Request Status: ' + error, '', {
                    duration: 2000,
                })
            })
    }
}
