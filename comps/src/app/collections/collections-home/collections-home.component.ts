import { Component } from '@angular/core';
import { TablesComponent } from '../tables/tables.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-collections-home',
  standalone: true,
  imports: [TablesComponent, DividerComponent, TabsComponent],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css',
})

export class CollectionsHomeComponent {
  data = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'Jil', age: 26, job: 'Engineer' },
    { name: 'Elise', age: 25, job: 'Engineer' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
