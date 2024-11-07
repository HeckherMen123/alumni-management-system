import { Timestamp } from '@angular/fire/firestore';

export interface EventAchievement {
  id?: string;
  title?: string;
  description?: string;
  content?: string;
  date?: Timestamp;
}
