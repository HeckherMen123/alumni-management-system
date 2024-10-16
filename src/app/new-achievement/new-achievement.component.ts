import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentReference, FirestoreModule} from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase.config';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-new-achievement',
  templateUrl: './new-achievement.component.html',
  styleUrl: './new-achievement.component.scss'
})
export class NewAchievementComponent {

  private firestore: Firestore = inject(Firestore);
  public auth = getAuth();
  achievementCollection!: CollectionReference;

  public currentUser: any;
  public achievementModel = {
    content : "",
    submitted_by: "",
    created_on: ""
  }


  public dateToday = new Date();

  constructor(
    private route: Router,
  ){
  }

  ngOnInit(): void {

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log(user)
        this.currentUser = user;
      }
    });

  }


  goBackToAchievements(){
    this.route.navigate(['achievements']);
  }

  async createAchievement() {
    this.achievementModel.submitted_by = this.currentUser.email;
    this.achievementModel.created_on = this.dateToday.toISOString();
    const docRef = await addDoc(collection(this.firestore, 'achievements'), {
      content: this.achievementModel.content,
      submitted_by: this.achievementModel.submitted_by,
      created_on: this.achievementModel.created_on
    });
    console.log("Document written with ID: ", docRef.id);
  }

  testEvent(){
    console.log("OUTPUT: ", this.achievementModel.content);
  }

}
