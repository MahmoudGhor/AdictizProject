import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'adz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  OnSearch(value: string) {
    if (value.trim() !== '') {
      this.router.navigate(['/result', value]);
    }
  }
}
