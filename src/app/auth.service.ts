import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserCredential } from 'firebase/auth';
import firebase from 'firebase/compat/app';

interface User {
  role: string;
  // Add any other fields you expect in the user document
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData?: User;

  constructor(private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,) { }

  // Simulate login
  async login(username: string, password: string) {
    const userCredential = await this.afAuth.signInWithEmailAndPassword(
      username,
      password
    );
    console.log('Login successful:', userCredential);
    const userData = await this.getUser(userCredential)
    return userData
  }

  async getUser(userCredential: { additionalUserInfo?: firebase.auth.AdditionalUserInfo | null | undefined; credential?: firebase.auth.AuthCredential | null; operationType?: string | null | undefined; user: any; } | undefined) {
    const userId = userCredential?.user?.uid;

    // Fetch user role from Firestore
    const userDoc = await this.firestore.collection('users').doc(userId).get().toPromise();
    const userData = userDoc?.data() as User;
    this.userData = userData
    console.log(this.userData)
    return userData;
  }

  isAdmin() {
    return this.userData?.role == "admin"
  }

  isUser() {
    return this.userData?.role == "user"
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
