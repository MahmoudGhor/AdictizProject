import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http: HttpClient) {
  }

  searchBookByName(name) {
    const url = encodeURI(encodeURI('https://www.googleapis.com/books/v1/volumes?q=' + name));
    return this.http.get(url);
  }
}
