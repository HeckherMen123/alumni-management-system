import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  // Define the events array with some mock data
  events = [
    {
      title: 'Event title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: 'path-to-image1.jpg'
    },
    {
      title: 'Event title 2',
      description: 'Vivamus eget nulla arcu. Nunc vestibulum tincidunt lectus...',
      image: 'path-to-image2.jpg'
    },
    {
      title: 'Event title 3',
      description: 'Aenean et velit at est accumsan bibendum...',
      image: 'path-to-image3.jpg'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
