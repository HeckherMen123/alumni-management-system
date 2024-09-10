import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HomepageComponent } from './app/homepage/homepage.component';
import { Router } from '@angular/router';

platformBrowserDynamic()
  .bootstrapModule(HomepageComponent,)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
