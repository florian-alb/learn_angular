import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UnsplashImg } from '../app.component'
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-image-show',
  standalone: true,
  imports: [NgIf],
  templateUrl: './image-show.component.html',
  styleUrl: './image-show.component.css'
})
export class ImageShowComponent {
  @Output() submited = new EventEmitter<void>();

  getRandomImage(){
    this.submited.emit();
  }

  @Input() img = "";
}
