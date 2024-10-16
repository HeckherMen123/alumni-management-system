import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.scss']
})
export class EventpageComponent implements OnInit {

  // Declare the 'events' array
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
    },
    {
      title: 'Event 4',
      description: 'This is a description for Event 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#'
    },
    {
      title: 'Event 5',
      description: 'This is a description for Event 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#'
    },
    {
      title: 'Event 6',
      description: 'This is a description for Event 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

}
