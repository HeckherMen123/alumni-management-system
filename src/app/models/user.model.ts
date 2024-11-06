import { User as FirebaseUser } from 'firebase/auth';

export interface User extends FirebaseUser {
  roles?: string[]; // Add roles property as an optional array
}
