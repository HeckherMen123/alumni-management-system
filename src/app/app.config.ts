import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';  // Import for Firebase
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmwANBpTgw05Nbc00zEmFqBN1Kzezv8Zg",
  authDomain: "alumni-management-system-d69d1.firebaseapp.com",
  projectId: "alumni-management-system-d69d1",
  storageBucket: "alumni-management-system-d69d1.appspot.com",
  messagingSenderId: "355019783367",
  appId: "1:355019783367:web:c3687c49cc32ace5e8d2e2",
  measurementId: "G-C3J9K2G4Q0"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),  // Optional, for async animations
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore())
  ]
};
