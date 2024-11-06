import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AchievementpageComponent } from './achievementpage/achievementpage.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { NewAchievementComponent } from './new-achievement/new-achievement.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard} from './auth.guard';
import { RoleGuard } from './role.guard';
import { AdminapprovalComponent } from './adminapproval/adminapproval.component';
import { AdmineventComponent } from './adminevent/adminevent.component';
import { NewadmineventComponent } from './newadminevent/newadminevent.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent, canActivate:[AuthGuard]},
  { path: 'achievements', component: AchievementpageComponent, canActivate:[AuthGuard]},
  { path: 'events', component: EventpageComponent, canActivate:[AuthGuard] },
  { path: 'new-achievements', component: NewAchievementComponent, canActivate:[AuthGuard]},
  { path: 'profiles', component: ProfileComponent, canActivate:[AuthGuard]},
  { path: 'adminapproval', component: AdminapprovalComponent, canActivate:[RoleGuard,AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adminevent', component: AdmineventComponent, canActivate:[RoleGuard, AuthGuard]},
  { path: 'new-event', component: NewadmineventComponent, canActivate:[RoleGuard, AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to login
  { path: '**', redirectTo: '/login' },                  // Redirect unknown paths to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
