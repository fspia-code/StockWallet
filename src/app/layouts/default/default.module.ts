import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartdataService } from './../../modules/chartdata.service';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './../../modules/account/account.component';
import { StockviewerComponent } from './../../modules/stockviewer/stockviewer.component';
import { HomeComponent } from './../../modules/home/home.component';
import { StocklistComponent } from 'src/app/modules/stockviewer/stocklist/stocklist.component';
import { StockbodyComponent } from 'src/app/modules/stockviewer/stockbody/stockbody.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    StockviewerComponent,
    AccountComponent,
    StockbodyComponent,
    StocklistComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ChartdataService
  ]
})
export class DefaultModule { }
