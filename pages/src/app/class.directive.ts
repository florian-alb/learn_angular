import { Directive, ElementRef, input, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective{
  constructor(private element: ElementRef) {};

  @Input('appClass') set classNames(classObj : any){
    for (let key in classObj){
      if (classObj[key]){
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  };
}
