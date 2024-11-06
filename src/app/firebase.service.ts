import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) {}

  getAchievements(pageSize: number, lastVisible: any): Observable<any[]> {
    let lastVisiblePost = lastVisible ? lastVisible : 0;
    console.log(lastVisiblePost)
    return this.firestore.collection('achievements', ref => ref.orderBy("created_on").startAfter(lastVisiblePost).limit(pageSize)).valueChanges();
  }

  getUserData(userId?: string): Observable<any> {
    return this.auth.user.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.collection('users').doc(user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  updateUserData(userId: string, userData: any): Promise<void> {
    return this.firestore.collection('users').doc(userId).update(userData);
  }

  getAdminEvents(pageSize: number, lastVisible: any): Observable<any[]> {
    let lastVisiblePost = lastVisible ? lastVisible : 0;
    console.log(lastVisiblePost)
    return this.firestore.collection('events', ref => ref.orderBy("created_on").startAfter(lastVisiblePost).limit(pageSize)).valueChanges();
  }
}
