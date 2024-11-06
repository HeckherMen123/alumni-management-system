import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(private firestore: AngularFirestore) {}

  // Fetch pending achievements (where status is 0)
  getPendingAchievements(): Observable<any[]> {
    return this.firestore.collection('achievements', ref => ref.where('status', '==', 0))
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as { [key: string]: any }; // Type assertion to object
          const id = a.payload.doc.id;
          return { id, ...data };  // Spread the typed data object
        }))
      );
  }
  // Update achievement status by id
  updateAchievementStatus(id: string, status: number): Promise<void> {
    return this.firestore.collection('achievements').doc(id).update({ status: status });
  }
}