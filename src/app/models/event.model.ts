import { Timestamp } from '@angular/fire/firestore';

export interface AlumniEvent {
  id: string;
  title: string;
  description: string;
  date: Timestamp;
  time: string;
  venue: string;
  organizer: string;
  presenter: string;
}
