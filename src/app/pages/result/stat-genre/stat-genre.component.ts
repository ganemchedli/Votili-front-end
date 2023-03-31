import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-stat-genre',
  templateUrl: './stat-genre.component.html',
  styleUrls: ['./stat-genre.component.css']
})
export class StatGenreComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'condidat1' ],
    datasets: [
      { data: [  60 ], label: 'Femmes' },
      { data: [  90 ], label: 'Hommes' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }

}
