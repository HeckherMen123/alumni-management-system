import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router, private firestore: AngularFirestore) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          console.log('Authenticated user found:', user);
          
          // Fetch user role from Firestore (assuming user ID is user.uid)
          return this.firestore.collection('users').doc(user.uid).get().pipe(
            map(userDoc => {
              if (userDoc.exists) { // Check if document exists
                const userData = userDoc.data() as { role?: string }; // Adjust based on your Firestore data structure

                if (userData && userData.role) {
                  const role = userData.role;
                  console.log('User role:', role);

                  if (['admin', 'user'].includes(role)) {
                    return true; // Allow access if user has an accepted role
                  } else {
                    console.warn('User does not have a valid role. Redirecting to not-authorized page.');
                    this.router.navigate(['login']);
                    return false;
                  }
                } else {
                  console.warn('Role not found for user. Redirecting to login.');
                  this.router.navigate(['login']);
                  return false;
                }
              } else {
                console.warn('User document does not exist. Redirecting to login.');
                this.router.navigate(['login']);
                return false;
              }
            }),
            catchError(() => {
              // In case of any error, redirect to login
              this.router.navigate(['login']);
              return of(false);
            })
          );
        } else {
          console.warn('No authenticated user found. Redirecting to login.');
          this.router.navigate(['login']);
          return of(false);
        }
      }),
      catchError(() => {
        // In case of any error, redirect to login
        this.router.navigate(['login']);
        return of(false);
      })
    );
  }
}
