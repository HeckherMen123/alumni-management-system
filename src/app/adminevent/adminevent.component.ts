import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { EventDetailModalComponent } from '../event-detail-modal/event-detail-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { EventService } from '../eventservice.service';

@Component({
  selector: 'app-adminevent',
  templateUrl: './adminevent.component.html',
  styleUrls: ['./adminevent.component.scss'],
})
export class AdmineventComponent {
  events: any[] = [];

  public pageIndex = 0;
  public pageLimit = 100;
  public lastVisible = undefined;
  afs: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private eventService: EventService,
    // Inject MatDialog directly in the constructor arguments
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // Fetch events from Firebase
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  // Method to open the modal dialog with event details
  openDialog(event: any): void {
    this.dialog.open(EventDetailModalComponent, {
      data: event,
      width: '600px'
    });
  }

  goToNewEvents(): void {
    // Navigate to the "New Post" page
    this.router.navigateByUrl('new-event'); // Adjust the route if needed
  }

  deletePost(eventId: string) {
    this.afs.doc(`events/${eventId}`).delete()
      .then(() => {
        console.log('Event deleted successfully!');
        // Handle success, e.g., update the UI or display a message
      })
}
}