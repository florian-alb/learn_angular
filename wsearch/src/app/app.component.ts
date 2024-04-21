import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WikipediaService, WikipediaSearchResult } from './wikipedia.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageListComponent, SearchBarComponent, HttpClientModule, NgIf],
  templateUrl: './app.component.html',
})
export class AppComponent {
  pages: WikipediaSearchResult[] = [];

  constructor(private wikipedia : WikipediaService){}

  onTerm(term: string): void{
    this.wikipedia.search(term).subscribe(pages => {
      this.pages = pages;
    });
  }
}
