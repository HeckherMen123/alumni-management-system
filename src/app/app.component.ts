import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated 
})
export class AppComponent implements OnInit {
  showSidebarLayout: boolean = true;
  routesWithoutSidebar: string[] = ['/login', '/register', '/adminapproval'];  // Routes that do not need sidebar

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Check if the current route should not have a sidebar
        this.showSidebarLayout = !this.routesWithoutSidebar.includes(event.urlAfterRedirects);
      });
  }
}
