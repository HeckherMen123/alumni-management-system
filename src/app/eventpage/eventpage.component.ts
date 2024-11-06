import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EventService} from '../eventservice.service';
import { EventDetailModalComponent } from '../event-detail-modal/event-detail-modal.component';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.scss']
})
export class EventpageComponent implements OnInit {
  events: any[] = []; // Initialize as an empty array

  constructor(
    private eventService: EventService,  // Inject EventService
    public dialog: MatDialog
  ) {}

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
}