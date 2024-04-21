import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs';

export type WikipediaSearchResult = {
  title: string;
  snippet: string;
  pageid: number;
};

type WikipediaResonse = {
  query : {
    search : WikipediaSearchResult[]
  }
}

@Injectable({
  providedIn: 'root'
})

export class WikipediaService {
  constructor(private httpClient : HttpClient) { }

  search(searchTerm: string){
    return this.httpClient.get<WikipediaResonse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action : 'query',
        format:'json',
        list:'search',
        utf8:'1',
        srsearch: searchTerm,
        origin: '*'
      }
    }).pipe(map(val => val.query.search));
  }
}