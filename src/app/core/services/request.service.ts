import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(private http: HttpClient, private db: AngularFirestore) { }

    getRequest() {
        let requests: object
        let doc = this.db.collection('requests').doc('OnhqYgbgLdpbXHFvOe7y').ref.get()
        return doc
    }


    saveToFirebase() {

    }
}
