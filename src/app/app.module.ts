import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { StockbodyComponent } from './modules/stockviewer/stockbody/stockbody.component';
import { StocklistComponent } from './modules/stockviewer/stocklist/stocklist.component';




@NgModule({
  declarations: [
    AppComponent,
    StockbodyComponent,
    StocklistComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
