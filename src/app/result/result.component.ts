import {Component, OnInit} from '@angular/core';
import {BookApiService} from '../service/book-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
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
  searchName: any = '';

  constructor(private bookApiService: BookApiService,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    const bookName = this.route.snapshot.params.book;
    this.bookApiService.searchBookByName(bookName).subscribe((res: Book) => {
      this.bookList = res.items;
      this.loadListCategories();
    }, error1 => {
      this.snackBar.open('Something wrong just happened please refresh the page', 'Error', {
        duration: 10000,
      });
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

  returnAction() {
    this.router.navigate(['/search']);
  }
}
