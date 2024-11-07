import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminevent',
  templateUrl: './adminevent.component.html',
  styleUrl: './adminevent.component.scss',
})
export class AdmineventComponent {
  adminevents: any[] = [];

  public pageIndex = 0;
  public pageLimit = 100;
  public lastVisible = undefined;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getadminevents();
  }

  getadminevents(): void {
    this.firebaseService
      .getAdminEvents(this.pageLimit, this.lastVisible)
      .subscribe((data: any[]) => {
        // Ensure timestamps are converted to JavaScript Date objects and filter approved adminevents (status: 1)
        this.adminevents = data.map((item) => ({
          ...item,
          timestamp: item.timestamp ? new Date(item.timestamp) : new Date(), // Convert Firestore timestamp to JS Date
        }));

        // Sort by the converted Date object
        this.adminevents = this.adminevents.reverse();
      });
  }

  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageLimit = event.pageSize;

    this.getadminevents();
  }

  goToNewEvents(): void {
    // Navigate to the "New Post" page
    this.router.navigateByUrl('new-event'); // Adjust the route if needed
  }
}
