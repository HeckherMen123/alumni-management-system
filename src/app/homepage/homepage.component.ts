import { Component, OnInit } from '@angular/core';
import { EventService } from '../eventservice.service';
import { first, forkJoin } from 'rxjs';
import { AchievementsService } from '../achievement.service';
import { EventAchievement } from '../models/eventAchievement.model';

@Component({
  selector: 'app-eventpage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  // Define the 'events' array
  eventAchievements: EventAchievement[] = [];

  constructor(
    private eventService: EventService,
    private achievementsService: AchievementsService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.eventAchievements = [];
    forkJoin([
      this.eventService.getLast3Events().pipe(first()),
      this.achievementsService.getLast3Achievements().pipe(first()),
    ]).subscribe(([events, achievements]) => {
      events.forEach((eachEvent) => {
        this.eventAchievements.push(eachEvent as EventAchievement);
      });
      achievements.forEach((achievement) => {
        this.eventAchievements.push(achievement as EventAchievement);
      });
    });
  }
}
