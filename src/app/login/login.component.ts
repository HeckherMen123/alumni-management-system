import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { initializeApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { firebaseConfig } from '../../firebase.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  auth: Auth;

  constructor( private afAuth: AngularFireAuth, private router: Router) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
  }

  async gotoHome() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        this.username,
        this.password
      );
      console.log('Login successful:', userCredential);
      // Navigate to homepage after successful login
      this.router.navigateByUrl('homepage');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  }
}