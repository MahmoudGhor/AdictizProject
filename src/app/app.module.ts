import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SearchComponent} from './search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatGridListModule, MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {ResultComponent} from './result/result.component';
import {BookApiService} from './service/book-api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {PopupComponent} from './popup/popup.component';
import {FilterPipe} from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    PopupComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatRadioModule
  ],
  providers: [BookApiService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule {
}
