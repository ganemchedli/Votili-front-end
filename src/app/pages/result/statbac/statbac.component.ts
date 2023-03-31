import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-statbac',
  templateUrl: './statbac.component.html',
  styleUrls: ['./statbac.component.css']
})
export class StatbacComponent {
  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Ont le Bac' ], [ 'n ont pas du Bac' ] ];
  public pieChartDatasets = [ {
    data: [ 300, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }
}
