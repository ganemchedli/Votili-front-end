import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { StatserviceService } from '../../statservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stat-age',
  templateUrl: './stat-age.component.html',
  styleUrls: ['./stat-age.component.css']
})
export class StatAgeComponent implements OnInit {
  url: string = "http://localhost:8103/";
  title = 'ng2-charts-demo';

  ageinf30: number = 200;
  agebetween30and50: number = 500;
  agesup50: number = 350;
  idcondidat: number = 1;
  datajson: any;

  // PolarArea
  public polarAreaChartLabels: string[] = ['Age<30', '30<Age<50', 'Age>50'];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] =
       [{ data: [this.ageinf30, this.agebetween30and50, this.agesup50] }];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };

  constructor(private StatserviceService: StatserviceService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {}
 

  ngOnInit(): void {
    
    this.http.get('./personne.json').subscribe(data => {
      this.datajson = data;
    });
  }

  getstatageinf30(id: number) {
    this.StatserviceService.getstatageinf30(this.idcondidat, this.datajson).subscribe(ageinf30 => {
      console.log(ageinf30);
    });
  }
 
}
