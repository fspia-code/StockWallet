import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AccountComponent } from './../../modules/account/account.component';
import { StockviewerComponent } from './../../modules/stockviewer/stockviewer.component';
import { HomeComponent } from './../../modules/home/home.component';



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
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
