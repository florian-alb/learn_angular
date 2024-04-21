import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {
  @Input() data = [] as any[]

  openedItemIndex? = 0;

  onClick(index: number): void{
    if (this.openedItemIndex === index){
      this.openedItemIndex = undefined;
    } else {
      this.openedItemIndex = index;
    }
  }
}
