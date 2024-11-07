import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AlumniEvent } from './models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private firestore: AngularFirestore) {}

  // Method to fetch events from Firebase Firestore
  getEvents() {
    return this.firestore.collection('events').valueChanges();
  }

  createEvent(event: AlumniEvent) {
    return this.firestore.collection('events').add(event);
  }

  updateEvent(event: AlumniEvent) {
    this.firestore.doc('events/' + event.id).update(event);
  }

  deleteEvent(eventId: AlumniEvent) {
    this.firestore.doc('events/' + eventId).delete();
  }
}
