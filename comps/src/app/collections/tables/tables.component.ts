import { JsonPipe, NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [NgFor, JsonPipe, NgClass],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})

export class TablesComponent {
  @Input() classNames = "";
  @Input() data = [] as any;
  @Input() headers = [] as any;
}
