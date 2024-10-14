import { Component } from '@angular/core';


@Component({
  selector: 'app-achievementpage',
  templateUrl: './achievementpage.component.html',
  styleUrl: './achievementpage.component.scss'
})
export class AchievementpageComponent {
aachievements = [
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: null
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://via.placeholder.com/400x200' // Example image
  }
];
achievements: any;
}
