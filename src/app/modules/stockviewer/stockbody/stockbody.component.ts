import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';

import { StockSymbol } from "../../models/stocksymbol";
import { ChartDataService } from '../../../chartdata.service';

@Component({
  selector: 'app-stockbody',
  templateUrl: './stockbody.component.html',
  styleUrls: ['./stockbody.component.scss']
})

export class StockbodyComponent implements OnInit, AfterViewInit, OnDestroy
{
	ngOnInit() {}
	@Input() symbol: StockSymbol;
	@ViewChild('charts') public chartEl: ElementRef;
	
	constructor(private hcs: ChartDataService)
	{

  	}

	

	ngAfterViewInit()
	{
		// this.createChart();
	}

	ngOnDestroy()
	{

	}

	createChart(symbol: any)
	{
		this.hcs.loadData(symbol, (symbol, data)=> {
			this.hcs.createChart(this.chartEl.nativeElement, symbol, data);
		});
	}
}