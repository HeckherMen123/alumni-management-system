import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentReference, FirestoreModule } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase.config';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-newadminevent',
  templateUrl: './newadminevent.component.html',
  styleUrl: './newadminevent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewadmineventComponent {
  saveAevent() {
    throw new Error('Method not implemented.');
  }
  submitForm() {
    throw new Error('Method not implemented.');
  }
  cancel() {
    throw new Error('Method not implemented.');
  }

  formGroup!: FormGroup;
  adminevent: any;

  constructor(private fb: FormBuilder) {

    this.adminevent = this.fb.group({
      'Title': ['', [Validators.required]],
      'EventDesc': ['', [Validators.required]],
      'Organizer': [''],
      'Presenter': [''],
      'Time': [''],
    
    
    });

  }
}