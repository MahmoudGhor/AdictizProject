import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'adz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdictizProject';

  constructor(translate: TranslateService) {
    if (localStorage.getItem('langue') === 'en') {
      translate.setDefaultLang('en');
      translate.use('en');
    } else if (localStorage.getItem('langue') === 'fr') {
      translate.setDefaultLang('fr');
      translate.use('fr');
    } else {
      translate.setDefaultLang(navigator.language.split('-')[0]);
      translate.use(navigator.language.split('-')[0]);
    }

  }
}
