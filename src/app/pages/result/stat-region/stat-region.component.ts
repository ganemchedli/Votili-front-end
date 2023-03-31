import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-stat-region',
  templateUrl: './stat-region.component.html',
  styleUrls: ['./stat-region.component.css']
})
export class StatRegionComponent {
  title = 'ng2-charts-demo';

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: false,
  };
  public radarChartLabels: string[] = ['sud', 'Est', 'nord', 'Ouest'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 39,45], label: 'Condidat1' },
    { data: [34, 47, 59,55], label: 'condidat2' }
    
  ];

  constructor() {
  }

}
