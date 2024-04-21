import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-views-home',
  standalone: true,
  imports: [StatisticsComponent, DividerComponent, ItemListComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  statistics = [
    {
      value: 22,
      label: 'favorites'
    },
    {
      value: 968,
      label: 'pages views'
    },
    {
      value: 30,
      label: 'users'
    }
  ]

  listItems = [
    {
      image: 'assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'a descr',
      extra: 'extra data 1'
    },
    {
      image: 'assets/images/couch.jpeg',
      title: 'Couch',
      description: 'good couch',
      extra: 'extra data 2'
    },
  ]
}
