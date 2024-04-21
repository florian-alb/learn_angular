import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/img/tree.jpeg',
      username: '@nature',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias sed recusandae a iure nobis! Cumque incidunt sit voluptatem mollitia, doloribus distinctio consequatur doloremque laudantium expedita minus, officiis corrupti odit.',
    },
    {
      title: 'Mountain',
      imageUrl: 'assets/img/mountain.jpeg',
      username: '@mountain',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias sed recusandae a iure nobis! Cumque incidunt sit voluptatem mollitia, doloribus distinctio consequatur doloremque laudantium expedita minus, officiis corrupti odit.',
    },
    {
      title: 'Bike',
      imageUrl: 'assets/img/biking.jpeg',
      username: '@bike',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias sed recusandae a iure nobis! Cumque incidunt sit voluptatem mollitia, doloribus distinctio consequatur doloremque laudantium expedita minus, officiis corrupti odit.',
    },
  ];
}
