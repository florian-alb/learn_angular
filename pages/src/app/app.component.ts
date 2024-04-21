import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgClass, NgIf, ClassDirective, TimesDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title : "Happy",
      url : "https://images.unsplash.com/photo-1711968558537-21ca3db72a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
    {
      title : "Home",
      url : "https://images.unsplash.com/photo-1712928247899-2932f4c7dea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      title : "Dome",
      url : "https://images.unsplash.com/photo-1711529782256-415990bf28dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
      title : "Food",
      url : "https://plus.unsplash.com/premium_photo-1709560429071-071dcfe9e4c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title : "Happy",
      url : "https://images.unsplash.com/photo-1711968558537-21ca3db72a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
    {
      title : "Home",
      url : "https://images.unsplash.com/photo-1712928247899-2932f4c7dea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      title : "Dome",
      url : "https://images.unsplash.com/photo-1711529782256-415990bf28dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
      title : "Food",
      url : "https://plus.unsplash.com/premium_photo-1709560429071-071dcfe9e4c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title : "Happy",
      url : "https://images.unsplash.com/photo-1711968558537-21ca3db72a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
    {
      title : "Home",
      url : "https://images.unsplash.com/photo-1712928247899-2932f4c7dea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      title : "Dome",
      url : "https://images.unsplash.com/photo-1711529782256-415990bf28dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
      title : "Food",
      url : "https://plus.unsplash.com/premium_photo-1709560429071-071dcfe9e4c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    },    {
      title : "Happy",
      url : "https://images.unsplash.com/photo-1711968558537-21ca3db72a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
    {
      title : "Home",
      url : "https://images.unsplash.com/photo-1712928247899-2932f4c7dea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      title : "Dome",
      url : "https://images.unsplash.com/photo-1711529782256-415990bf28dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
      title : "Food",
      url : "https://plus.unsplash.com/premium_photo-1709560429071-071dcfe9e4c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title : "Happy",
      url : "https://images.unsplash.com/photo-1711968558537-21ca3db72a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
    {
      title : "Home",
      url : "https://images.unsplash.com/photo-1712928247899-2932f4c7dea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      title : "Dome",
      url : "https://images.unsplash.com/photo-1711529782256-415990bf28dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
      title : "Food",
      url : "https://plus.unsplash.com/premium_photo-1709560429071-071dcfe9e4c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title : "Happy",
      url : "https://images.unsplash.com/photo-1711968558537-21ca3db72a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
    {
      title : "Home",
      url : "https://images.unsplash.com/photo-1712928247899-2932f4c7dea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      title : "Dome",
      url : "https://images.unsplash.com/photo-1711529782256-415990bf28dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
      title : "Food",
      url : "https://plus.unsplash.com/premium_photo-1709560429071-071dcfe9e4c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title : "Happy",
      url : "https://images.unsplash.com/photo-1711968558537-21ca3db72a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
    {
      title : "Home",
      url : "https://images.unsplash.com/photo-1712928247899-2932f4c7dea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      title : "Dome",
      url : "https://images.unsplash.com/photo-1711529782256-415990bf28dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
      title : "Food",
      url : "https://plus.unsplash.com/premium_photo-1709560429071-071dcfe9e4c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    },    {
      title : "Happy",
      url : "https://images.unsplash.com/photo-1711968558537-21ca3db72a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
    {
      title : "Home",
      url : "https://images.unsplash.com/photo-1712928247899-2932f4c7dea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      title : "Dome",
      url : "https://images.unsplash.com/photo-1711529782256-415990bf28dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
      title : "Food",
      url : "https://plus.unsplash.com/premium_photo-1709560429071-071dcfe9e4c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    }
  ]

  goToPage(i: number):void{
    this.currentPage = i
  }

  nextPage():void{
    if (this.currentPage < this.images.length - 1){
      this.currentPage ++;
    }
  }

  prevPage() : void{
    if (this.currentPage > 0){
      this.currentPage --
    }
  }

  checkWindowIndex(index : number):boolean{
    return Math.abs(this.currentPage - index) < 5
  }
}
