import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { initializeApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { firebaseConfig } from '../../firebase.config';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../auth.service';

interface User {
  role: string;
  // Add any other fields you expect in the user document
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  auth: Auth | undefined;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {
    console.log(this.firestore); // Check if Firestore is undefined
  }

  async gotoHome() {
    try {
      const userData = await this.authService.login(
        this.username,
        this.password
      );

      if (userData && userData.role) {
        const role = userData.role; // Use the role directly
        console.log('User role:', role);

        // Navigate to different routes based on the user role
        if (this.authService.isAdmin()) {
          console.log('Navigating to adminapproval');
          this.router.navigate(['adminapproval']); // Redirect to Admin dashboard
        } else if (this.authService.isUser()) {
          console.log('Navigating to homepage');
          this.router.navigate(['homepage']); // Redirect to user homepage
        } else {
          console.warn('Role not recognized. Redirecting to login.');
          this.router.navigate(['/login']); // Redirect to a default page if the role is not recognized
        }
      } else {
        alert('Role not found for user.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  }
}
