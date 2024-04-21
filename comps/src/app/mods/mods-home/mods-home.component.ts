import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ModalComponent } from '../modal/modal.component';
import { NgIf } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [SharedModule, ModalComponent, NgIf, AccordionComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  accordionItems = [
    {
      title: 'Title 1',
      content: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cupiditate quasi molestias modi earum quibusdam excepturi recusandae quam ut officia vel consequuntur laboriosam minus molestiae ex ipsam provident eaque. Veritatis?'
    },
    {
      title: 'Title 2',
      content: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cupiditate quasi molestias modi earum quibusdam excepturi recusandae quam ut officia vel consequuntur laboriosam minus molestiae ex ipsam provident eaque. Veritatis?'
    },
    {
      title: 'Title 3',
      content: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cupiditate quasi molestias modi earum quibusdam excepturi recusandae quam ut officia vel consequuntur laboriosam minus molestiae ex ipsam provident eaque. Veritatis?'
    }
  ]



  isModalOpen = false;

  onClick(): void{
    this.isModalOpen = !this.isModalOpen;
  }
}
