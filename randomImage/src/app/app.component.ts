import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageShowComponent } from './image-show/image-show.component';
import { GetImageService, UnsplahResponse } from './get-image.service';

export type UnsplashImg = {
  src: string,
  description: string,
  alt: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageShowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  img = "";

  constructor(private getImageService : GetImageService){}

  onSubmit(){
    this.getImageService.getRandomImage().subscribe(img => {
      this.img = img;
    })
  }
}
