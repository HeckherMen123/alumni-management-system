import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventpage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  // Define the 'events' array
  events = [
    {
      title: 'Event 1',
      description: 'This is a description for Event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#'
    },
    {
      title: 'Event 2',
      description: 'This is a description for Event 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#'
    },
    {
      title: 'Event 3',
      description: 'This is a description for Event 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
