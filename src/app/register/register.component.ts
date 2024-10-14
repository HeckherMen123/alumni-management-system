import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async register() {
    try {
      // Create a new user with email and password
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        this.username,
        this.password
      );
      console.log('Registration successful:', userCredential);
      // Redirect to login page or home page after successful registration
      this.router.navigateByUrl('login');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  }
} 
