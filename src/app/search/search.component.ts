import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'adz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  language = '';

  constructor(private router: Router,
              private translate: TranslateService) {
  }

  ngOnInit() {
    if (localStorage.getItem('langue') === 'en') {
      this.language = 'en';
    } else if (localStorage.getItem('langue') === 'fr') {
      this.language = 'fr';
    }
  }

  OnSearch(value: string) {
    if (value.trim() !== '') {
      this.router.navigate(['/result', value]);
    }
  }

  changeLangage() {
    localStorage.setItem('langue', this.language);
    this.translate.use(this.language);
  }
}
