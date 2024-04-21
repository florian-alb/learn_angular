import { Component, output, Input, OnInit } from '@angular/core';
import { DynamicPipe } from '../dynamic-pipe.pipe';

@Component({
  selector: 'app-form-output',
  standalone: true,
  imports: [DynamicPipe],
  templateUrl: './form-output.component.html',
  styleUrl: './form-output.component.css'
})
export class FormOutputComponent implements OnInit {
  output: string;

  constructor(){
    this.output = "";
  }

  ngOnInit(): void {
    this.output = "";
  }

  @Input() formType = "";
  @Input() label = "";
  @Input() pipe = "";

  onFormChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
        this.output = target.value;
    }
  }
}