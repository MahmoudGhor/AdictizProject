import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { ResultComponent } from './result/result.component';
import {BookApiService} from './service/book-api.service';
import {HttpClientModule} from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [BookApiService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
