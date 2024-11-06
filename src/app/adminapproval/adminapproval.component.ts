import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AchievementsService } from '../achievement.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './adminapproval.component.html',
  styleUrls: ['./adminapproval.component.scss'],
  encapsulation: ViewEncapsulation.Emulated 
})
export class AdminapprovalComponent implements OnInit {
  achievements: any[] = [];

  constructor(private achievementsService: AchievementsService) {}

  ngOnInit(): void {
    this.loadPendingAchievements();
  }

  loadPendingAchievements(): void {
    this.achievementsService.getPendingAchievements().subscribe((data: any[]) => {
      this.achievements = data;
    });
  }

  updateStatus(id: string, status: number): void {
    this.achievementsService.updateAchievementStatus(id, status)
      .then(() => {
        this.loadPendingAchievements(); // Reload data after updating status
      });
  }

  getStatusText(status: number): string {
    switch (status) {
      case 0:
        return 'Pending';
      case 1:
        return 'Approved';
      case 2:
        return 'Rejected';
      default:
        return 'Unknown';
    }
  }
}
