import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-stat-age',
  templateUrl: './stat-age.component.html',
  styleUrls: ['./stat-age.component.css']
})
export class StatAgeComponent {
  
title = 'ng2-charts-demo';

  // PolarArea
  public polarAreaChartLabels: string[] = ['Age<30', '30<Age<50', 'Age>50'];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] =
    [{ data: [300, 500, 200] }];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };
 
  constructor() {}


}
