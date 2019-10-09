import {Component, OnInit} from '@angular/core';
import {BookApiService} from '../service/book-api.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {PopupComponent} from '../popup/popup.component';

@Component({
  selector: 'adz-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  bookList: any[];

  constructor(private bookApiService: BookApiService,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    const bookName = this.route.snapshot.params.book;
    this.bookApiService.searchBookByName(bookName).subscribe((res: Book) => {
      this.bookList = res.items;
    });
  }

  openDialog(identifier: any): void {
    this.bookApiService.detailsBook(identifier).subscribe(res => {
      this.dialog.open(PopupComponent, {
        width: '800px',
        data: res
      });
    });
  }
}
