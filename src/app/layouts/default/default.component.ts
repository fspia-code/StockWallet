import { Component, OnInit, ViewChild } from '@angular/core';
import { StockbodyComponent } from 'src/app/modules/stockviewer/stockbody/stockbody.component';
import { StockSymbol } from 'src/app/modules/models/stocksymbol';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  @ViewChild(StockbodyComponent) stockbody: StockbodyComponent;

  symbolSelectedFromList(symbol: StockSymbol)
  {
  	this.stockbody.createChart(symbol.id);
  }
}


