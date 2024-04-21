import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormOutputComponent } from './form-output/form-output.component';
import { DatePipe, NgFor, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormOutputComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DatePipe, TitleCasePipe]
})
export class AppComponent {
  forms = [
    {
      output: 'output',
      formType: 'text',
      label: 'Reciever Name',
      pipe: 'titlecase'
    },
    {
      output: 'output',
      formType: 'date',
      label: 'Order Date',
      pipe: "dateformat"
    },
  ];
}
