import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout()
      .then(() => {
        // Navigate to login page after successful logout
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Error during sign-out:', error);
      });
  }

  isAdmin() {
    return this.authService.isAdmin()
  }
}
