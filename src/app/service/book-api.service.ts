import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http: HttpClient) {
  }

  searchBookByName(name) {
    const url = encodeURI(encodeURI('https://www.googleapis.com/books/v1/volumes?q=' + name + '&langRestrict=en'));
    return this.http.get(url);
  }

  detailsBook(id) {
    const url = encodeURI(encodeURI('https://www.googleapis.com/books/v1/volumes?q=isbn' + id + '&langRestrict=en'));
    return this.http.get(url);
  }
}
