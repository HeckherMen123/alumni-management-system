import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

interface UserData {
  role: string; // The role could be 'admin', 'user', etc.
}


@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (!user) {
          this.router.navigate(['login']); // Redirect to login if not authenticated
          return new Observable<boolean>((observer) => observer.next(false));
        }

        // Fetch the user's data from Firestore
        return this.firestore.collection('users').doc(user.uid).get().pipe(
          map((doc) => {
            // Use type assertion to tell TypeScript the expected shape of the data
            const userData = doc.data() as UserData;

            // If user has 'admin' role, allow access
            if (userData.role === 'admin') {
              return true;
            } else {
              this.router.navigate(['/homepage']); // Redirect if not admin
              return false;
            }
          })
        );
      })
    );
  }
}
