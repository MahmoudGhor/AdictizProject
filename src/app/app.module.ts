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
  MatProgressSpinnerModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { ResultComponent } from './result/result.component';
import {BookApiService} from './service/book-api.service';
import {HttpClientModule} from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';

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
    FormsModule
  ],
  providers: [BookApiService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
