import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import FormsModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventDetailModalComponent } from './event-detail-modal/event-detail-modal.component';
import { AchievementpageComponent } from './achievementpage/achievementpage.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewAchievementComponent } from './new-achievement/new-achievement.component'; // <-- Add this import
import { ProfileComponent } from './profile/profile.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebaseConfig } from '../firebase.config'; 
import { FirebaseService } from './firebase.service'; // 


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; // For menu list
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { QuillModule } from 'ngx-quill';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AdminapprovalComponent } from './adminapproval/adminapproval.component';
import { AdmineventComponent } from './adminevent/adminevent.component';
import { NewadmineventComponent } from './newadminevent/newadminevent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    AchievementpageComponent,
    EventpageComponent,
    SidebarComponent,
    NewAchievementComponent,
    EventDetailModalComponent,
    ProfileComponent,
    AdminapprovalComponent,
    AdmineventComponent,
    NewadmineventComponent,
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    QuillModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
  ],

  providers: [
    FirebaseService,
    provideAnimationsAsync(),
    provideFirebaseApp( () => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
    provideNativeDateAdapter(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
