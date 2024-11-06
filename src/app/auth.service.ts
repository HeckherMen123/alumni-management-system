import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Simulate a method to get the current user
  getUser() {
    const user = JSON.parse(localStorage.getItem('user') || '{}'); // Example, adjust based on your storage method
    return user; // user should have a role property
  }

  // Simulate login
  login(credentials: { username: string, password: string }) {
    // Assume a real auth system, for now we'll mock the result
    const mockUser = {
      username: credentials.username,
      role: credentials.username === 'admin' ? 'admin' : 'user',
    };

    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
  }

  logout(): Promise<void>{
    return this.afAuth.signOut();
  }
}
