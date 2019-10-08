import {Component, OnInit} from '@angular/core';
import {BookApiService} from '../service/book-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'adz-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  bookList: any[];

  constructor(private bookApiService: BookApiService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const bookName = this.route.snapshot.params.book;
    this.bookApiService.searchBookByName(bookName).subscribe((res: Book) => {
      this.bookList = res.items;
    });
  }

}
