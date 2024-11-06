import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userId: string = '';
saveProfile: any;

  constructor(
    private fb: FormBuilder,
    private FirebaseService: FirebaseService,
    private auth: AngularFireAuth,
    private storage: AngularFireStorage // For handling image upload
  ) {
    this.profileForm = this.fb.group({
      studentid: [''],
      name: [''],
      email: [''],
      contact: [''],
      backgroundInfo: [''],
 
    });
  }

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.FirebaseService.getUserData(this.userId).subscribe(data => {
          if (data) {
            this.profileForm.patchValue({
              studentid: data.studentid,
              name: data.name,
              email: data.email,
              contact: data.contact,
              backgroundInfo: data.backgroundInfo
            });
          }
        });
      }
    });
  }

  updateProfile(profileData: any): void {
    this.FirebaseService.updateUserData(this.userId, profileData).then(() => {
      console.log('Profile updated successfully!');
    }).catch(error => {
      console.error('Error updating profile: ', error);
    });
  }

  cancel(): void {
    // Reset form or navigate away
  }
}
