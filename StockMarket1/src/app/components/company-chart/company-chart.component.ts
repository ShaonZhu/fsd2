import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-chart',
  templateUrl: './company-chart.component.html',
  styleUrls: ['./company-chart.component.scss']
})
export class CompanyChartComponent implements OnInit {
  lineChartData: ChartDataSets[] = [];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(companyService: CompanyService) {
    this.lineChartData = [{ data: companyService.getStockPeriodPrices(), label: 'Stock prices' }];
  }

  ngOnInit(): void {
  }

}
