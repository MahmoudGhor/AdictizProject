import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  language: string;

  constructor(private http: HttpClient) {
  }


  searchBookByName(name) {
    const url = encodeURI(encodeURI('https://www.googleapis.com/books/v1/volumes?q=' + name + '&langRestrict=' +
      navigator.language.split('-')[0]));
    return this.http.get(url);
  }

  detailsBook(id) {
    const url = encodeURI(encodeURI('https://www.googleapis.com/books/v1/volumes?q=isbn' + id));
    return this.http.get(url);
  }
}
