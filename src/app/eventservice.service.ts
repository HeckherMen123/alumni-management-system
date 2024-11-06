import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firestore: AngularFirestore) { }

  // Method to fetch events from Firebase Firestore
  getEvents(): Observable<any[]> {
    return this.firestore.collection('events').valueChanges();
  }
}
