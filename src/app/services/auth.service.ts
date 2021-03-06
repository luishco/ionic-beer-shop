import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'
import AuthProvider = firebase.auth.AuthProvider
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: firebase.User
  private firestore = firebase.firestore()

  signInWithEmail(credentials) {
    console.log('Sign in with email');
    return this.afAuth.auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(
      credentials.email, credentials.password
    ).then((registeredUser) => {
      return this.updateProfile({
        name: credentials.name,
        photoUrl: null,
        cpf: credentials.cpf,
        address: credentials.address
      }, registeredUser.user.email)
    }).catch((err) => {
      console.log(err);
    })
  }

  updateProfile(profile, email = '', updateOrders = true) {
    let userOptions = {
      name: profile.name,
      photoUrl: profile.photoUrl,
      cpf: profile.cpf,
      address: profile.address
    }
    if(email === '')
      email = this.user.email;
    if (updateOrders)
      this.firestore.collection('ordersCollection').doc(email).set({ orders: []});
    return this.firestore.collection('usersCollection').doc(email).set(userOptions);
  }

  retrieveUserData() {
    let userRef = this.firestore.collection('usersCollection').doc(this.user.email);
    return userRef.get().then(doc => {
      if(!doc.exists)
        return;
      return doc.data()
    })
  }

  makeOrder(chart) {
    return this.firestore.collection('ordersCollection').doc(this.user.email).update('orders', [chart])
  }

  _getOrders() {
    let ordersRef = this.firestore.collection('ordersCollection').doc(this.user.email);
    return ordersRef.get().then(doc => {
      if(!doc.exists)
        return;
      return doc.data()
    })
  }

  get authenticated(): boolean { return this.user !== null; }

  getEmail() {
    return this.user && this.user.email;
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  private oauthSignIn(provider: AuthProvider) {
    if (!(<any>window).cordova) {
      return this.afAuth.auth.signInWithPopup(provider);
    } else {
      return this.afAuth.auth.signInWithRedirect(provider)
        .then(() => {
          return this.afAuth.auth.getRedirectResult().then(result => {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            let token = result.credential.providerId;
            // The signed-in user info.
            let user = result.user;
            console.log(token, user);
          }).catch(function (error) {
            // Handle Errors here.
            alert(error.message);
          });
        });
    }
  }

  signInWithGoogle(): Promise<any> {
    console.log('Sign in with google');
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider(
    ));
  }
  
  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    })
  }

}