import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentReference, FirestoreModule} from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase.config';

@Component({
  selector: 'app-new-achievement',
  templateUrl: './new-achievement.component.html',
  styleUrl: './new-achievement.component.scss'
})
export class NewAchievementComponent {

  private firestore: Firestore = inject(Firestore);
  achievementCollection!: CollectionReference;

  public achievementModel = {
    content : "",
    attachment: "",
    submitted_by: "",
    created_on: ""
  }


  constructor(
    private route: Router
  ){
  }

  ngOnInit(): void {
  }

  goBackToAchievements(){
    this.route.navigate(['achievements']);
  }

  async createAchievement() {
    // const docRef = await addDoc(collection(this.firestore, 'achievements'), {
    //   content: achievementModel.content,
    //   attachment: achievementModel.attachment,
    //   submitted_by: achievementModel.submitted_by,
    //   created_on: achievementModel.created_on
    // });
    // console.log("Document written with ID: ", docRef.id);

    await addDoc(this.achievementCollection, this.achievementModel ).then((documentReference: DocumentReference) => {
      // the documentReference provides access to the newly created document
    });
  }

  testEvent(){
    console.log("OUTPUT: ", this.achievementModel.content);
  }

}
