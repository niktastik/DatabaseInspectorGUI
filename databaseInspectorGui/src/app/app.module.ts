import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DatabaseInspectorService } from './services/databaseInspector.service';

import { AppComponent } from './app.component';
import { DatabaseSummaryComponent } from './database/databaseSummary.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DatabaseInspectorService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
