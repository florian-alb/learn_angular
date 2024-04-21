import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Output() submited = new EventEmitter<string>();

  searchValue = '';

  onInput(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  onFormSubmit(event: Event): void {
    event.preventDefault();
    this.submited.emit(this.searchValue);
  }
}
