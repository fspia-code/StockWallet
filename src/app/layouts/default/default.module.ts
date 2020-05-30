import { RouterModule } from '@angular/router';
import { AccountComponent } from './../../modules/account/account.component';
import { StockviewerComponent } from './../../modules/stockviewer/stockviewer.component';
import { HomeComponent } from './../../modules/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    StockviewerComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class DefaultModule { }
