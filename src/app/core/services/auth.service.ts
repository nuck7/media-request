import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    public user: Observable<firebase.User>;
    public userDetails: firebase.User = null;
    admins = ['chu071@gmail.com']


    constructor(public afAuth: AngularFireAuth, private router: Router) {
        this.user = afAuth.authState
            .pipe(shareReplay(1))

        this.user.subscribe((user) => {
            if (user) {
                this.userDetails = user;
            }
            else {
                this.userDetails = null;
            }
        });
    }

    ngOnInit() {

    }

    login() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
    logout() {
        this.afAuth.auth.signOut()
            .then((res) => this.router.navigate(['/']));
    }

    isUserAdmin() {
        if (this.admins.indexOf(this.userDetails.email) > -1) {
            return true
        }
        else {
            return false
        }
    }
}
