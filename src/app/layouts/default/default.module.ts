import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './../../modules/account/account.component';
import { StockviewerComponent } from './../../modules/stockviewer/stockviewer.component';
import { HomeComponent } from './../../modules/home/home.component';
import { StocklistComponent } from 'src/app/modules/stockviewer/stocklist/stocklist.component';
import { StockbodyComponent } from 'src/app/modules/stockviewer/stockbody/stockbody.component';
import { StockListItemComponent } from 'src/app/modules/stockviewer/stocklist/stocklist-item/stocklist-item.component';
import { ChartDataService } from 'src/app/chartdata.service';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    StockviewerComponent,
    AccountComponent,
    StockbodyComponent,
    StocklistComponent,
    StockListItemComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ChartDataService
    
  ]
})
export class DefaultModule { }
