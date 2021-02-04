import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddrecordComponent } from './addrecord/addrecord.component';
import { MyResultsComponent } from './my-results/my-results.component';
import { TableMyResultComponent } from './table-my-result/table-my-result.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddrecordComponent,
    MyResultsComponent,
    TableMyResultComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
