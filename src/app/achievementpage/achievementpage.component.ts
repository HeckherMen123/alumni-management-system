import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';  // Adjust the path as needed

@Component({
  selector: 'app-achievements',
  templateUrl: './achievementpage.component.html',
  styleUrls: ['./achievementpage.component.scss']
})
export class AchievementpageComponent implements OnInit {
  achievements: any[] = [];

  public pageIndex = 0;
  public pageLimit = 100;
  public lastVisible = undefined;
  

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.getAchievements();
  }

  getAchievements(): void {
    this.firebaseService.getAchievements(this.pageLimit, this.lastVisible).subscribe((data: any[]) => {
      // Ensure timestamps are converted to JavaScript Date objects and filter approved achievements (status: 1)
      this.achievements = data
        .filter(item => item.status === 1) // Only keep achievements with status: 1
        .map(item => ({
          ...item,
          timestamp: item.timestamp ? new Date(item.timestamp) : new Date() // Convert Firestore timestamp to JS Date
        }));

      // Sort by the converted Date object
      this.achievements = this.achievements.reverse();
    });
  }

  goToNewPost(): void {
    // Navigate to the "New Post" page
    window.location.href = '/new-achievements';  // Adjust the route if needed
  }

  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageLimit = event.pageSize;

    this.getAchievements();
  }
}
