import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  studentid: string = '';
  role: string = 'user';

  constructor(private afAuth: AngularFireAuth, private router: Router, private firestore: AngularFirestore) {}

  async register() {
    try {
      // Create a new user with email and password
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        this.username,
        this.password
      );

      const user = userCredential.user

      if (user) {
        await this.firestore.collection('users').doc(user.uid).set({
          email: this.username,
          studentid: this.studentid,
          role: this.role,
        })
        console.log('User Information Has Been Saved to the Database');
      }

      console.log('Registration successful:', userCredential);
      // Redirect to login page or home page after successful registration
      
      this.router.navigateByUrl('login');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  }
} 
