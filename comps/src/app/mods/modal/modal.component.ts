import { NgIf } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor(private el: ElementRef){}
  @Output() close = new EventEmitter();

  onCloseClick(): void{
    this.close.emit()
  }

  ngOnInit(): void{
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove()
  }

}
