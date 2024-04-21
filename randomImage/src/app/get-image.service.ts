import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export type UnsplahResponse = {
  urls : {regular :string}
}

@Injectable({
  providedIn: 'root'
})
export class GetImageService {

  constructor(private httpClient: HttpClient) { }

  getRandomImage(): Observable<string>{
    return this.httpClient.get<UnsplahResponse>('https://api.unsplash.com/photos/random',
    {
      headers: {
        "Accept-Version": 'v1',
        "Authorization":'Client-ID FlAgP29m6W22e0tHnOiXhM-SZytRdFDmVkg9d71aY3A'
      }
    }).pipe(map(req => req.urls.regular))
  }
}
