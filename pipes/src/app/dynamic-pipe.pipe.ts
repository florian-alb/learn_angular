import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'dynamicPipe',
  standalone: true
})
@Injectable()
export class DynamicPipe implements PipeTransform {
  constructor(private datePipe: DatePipe, private titleCasePipe: TitleCasePipe) {}

  transform(value: string, pipeName: string): any {
    switch (pipeName) {
      case 'titlecase':
        return this.titleCasePipe.transform(value);
      case 'date':
        return this.datePipe.transform(value);
      default:
        return value;
    }
  }
}
