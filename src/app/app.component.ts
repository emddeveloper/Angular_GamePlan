import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Big Tree',
      username: '@emd_aminul',
      content: 'I saw a big tree today.',
      imageUrl: 'assets/tree.jpeg',
    },
    {
      title: 'Big TGreat Mountain',
      username: '@Tania',
      content: 'I saw a big Mountain.',
      imageUrl: 'assets/mountain.jpeg',
    },
    {
      title: 'Love to Biking',
      username: '@aminul',
      content: 'I love to do biking everyday.',
      imageUrl: 'assets/biking.jpeg',
    },
  ];
}
