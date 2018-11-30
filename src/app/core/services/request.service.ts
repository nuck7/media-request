import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(private http: HttpClient, private afs: AngularFirestore) { 
        
    }

    getPreviousRequests(user) {
        let requestCollection = this.afs.collection('requests', ref => ref.where('requestor.email', '==', user))
        return requestCollection.get()
        
    }


    submitRequest(user, movieList) {
        let requestCollection = this.afs.collection('requests')
        let requestName = `${user}:${Date.now()}`
        requestCollection.add({requestor: user, date:Date.now(), movies: movieList, status: "requested"})
        .then(response => {
            //console.log(response)
        })
    }
}
