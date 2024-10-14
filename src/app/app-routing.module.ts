import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AchievementpageComponent } from './achievementpage/achievementpage.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewAchievementComponent } from './new-achievement/new-achievement.component';

const routes: Routes = [
  {
    path:'',
  component: SidebarComponent,
  children:[
  { path: 'homepage', component: HomepageComponent},
  { path: 'achievements', component: AchievementpageComponent },
  { path: 'events', component: EventpageComponent },
  { path: 'new-achievements', component: NewAchievementComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to login
  { path: '**', redirectTo: '/login' } // Redirect unknown paths to login or a 404 component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
