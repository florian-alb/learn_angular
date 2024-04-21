import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-segment',
  standalone: true,
  imports: [],
  templateUrl: './segment.component.html',
  styleUrl: './segment.component.css'
})
export class SegmentComponent {
  @Input() text = ""
  @Input() buttonText = ""
}
