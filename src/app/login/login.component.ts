import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { initializeApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { firebaseConfig } from '../../firebase.config';
import { AngularFirestore } from '@angular/fire/compat/firestore';


interface User {
  role: string;
  // Add any other fields you expect in the user document
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  auth: Auth | undefined;

  constructor( 
    private afAuth: AngularFireAuth, 
    private router: Router,
    private firestore: AngularFirestore
) {
    console.log(this.firestore);  // Check if Firestore is undefined
  }

  async gotoHome() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        this.username,
        this.password
      );
      console.log('Login successful:', userCredential);
      const userId = userCredential.user?.uid;
  
      // Fetch user role from Firestore
      const userDoc = await this.firestore.collection('users').doc(userId).get().toPromise();
      const userData = userDoc?.data() as User;
  
      if (userData && userData.role) {
        const role = userData.role; // Use the role directly
        console.log('User role:', role);
  
        // Navigate to different routes based on the user role
        if (role === 'admin') {
          console.log('Navigating to adminapproval');
          await this.router.navigate(['adminapproval']); // Redirect to Admin dashboard
        } else if (role === 'user') {
          console.log('Navigating to homepage');
          await this.router.navigate(['homepage']); // Redirect to user homepage
        } else {
          console.warn('Role not recognized. Redirecting to login.');
          await this.router.navigate(['/login']); // Redirect to a default page if the role is not recognized
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