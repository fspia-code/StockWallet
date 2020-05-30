import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { StockviewerComponent } from './modules/stockviewer/stockviewer.component';
import { AccountComponent } from './modules/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HomeComponent,
    StockviewerComponent,
    AccountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
