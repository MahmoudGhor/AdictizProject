import {Component, OnInit} from '@angular/core';
import {BookApiService} from '../service/book-api.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {PopupComponent} from '../popup/popup.component';
import {FilterPipe} from '../pipes/filter.pipe';

@Component({
  selector: 'adz-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [FilterPipe]
})
export class ResultComponent implements OnInit {
  bookList: any[];
  categoriesList: any[] = [];
  selectedCategory: any = '';
  authorName: any = '';

  constructor(private bookApiService: BookApiService,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    const bookName = this.route.snapshot.params.book;
    this.bookApiService.searchBookByName(bookName).subscribe((res: Book) => {
      this.bookList = res.items;
      this.loadListCategories();
    });

  }

  openDialog(identifier: any): void {
    this.bookApiService.detailsBook(identifier).subscribe(res => {
      this.dialog.open(PopupComponent, {
        width: '800px',
        maxHeight: '700px',
        data: res
      });
    });
  }

  loadListCategories() {
    this.bookList.map(item => {
      let checked = false;
      this.categoriesList.map(element => {
        if (item.volumeInfo.categories !== undefined) {
          item.volumeInfo.categories.map(book => {
            if (element.toString() === book.toString()) {
              checked = true;
            }
          });
        }
      });
      if (checked === false && item.volumeInfo.categories !== undefined) {
        this.categoriesList.push(item.volumeInfo.categories);
      }
    });
  }

  selectChangeHandler($event: Event) {
    this.selectedCategory = ($event.target as HTMLInputElement).value;
  }
}
