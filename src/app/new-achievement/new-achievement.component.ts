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
    created_on: "",
    status: 0,
  }

  quillEditorRef: any;


  public dateToday = new Date();

  constructor(
    private route: Router
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

  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;
    console.log(this.quillEditorRef)
    const toolbar = editorInstance.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler);
  }

  imageHandler = () => {console.log("testing log")
 
    const range = this.quillEditorRef.getSelection();

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files ? input.files[0] : null;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const quill = this.quillEditorRef;
          const range = quill.getSelection(true);
          quill.insertEmbed(range.index, 'image', e.target.result);

          setTimeout(() => {
            const img = document.querySelector(`img[src="${e.target.result}"]`) as HTMLImageElement;
            console.log("test: ",img.outerHTML)
            if (img) {
              img.style.width = '300px'; // Set constant width
              img.style.height = '200px'; // Set constant height
              this.achievementModel.content = this.achievementModel.content + img.outerHTML
            }
          }, 100);
            
        };
        reader.readAsDataURL(file);
      }
    };
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
      created_on: this.achievementModel.created_on,
      status: this.achievementModel.status
    });
    console.log("Document written with ID: ", docRef.id);
    this.route.navigate(['achievements']);
  }

  testEvent(){
    console.log("OUTPUT: ", this.achievementModel.content);
  }

}
