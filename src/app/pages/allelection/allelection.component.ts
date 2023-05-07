import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceElectionService } from 'src/app/service-election.service';

@Component({
  selector: 'app-allelection',
  templateUrl: './allelection.component.html',
  styleUrls: ['./allelection.component.css']
})
export class AllelectionComponent implements OnInit {
  elections: any[] | undefined
  users: any[] | undefined
  condidats: any[] | undefined
  url: string = "http://localhost:9137/";
  constructor(private serviceelection: ServiceElectionService, private router: Router) { 
   
  }

  ngOnInit(): void {
    }
iduser:number =1;

getallelectionbypersonne(id:number){
      this.serviceelection.getallelectionbypersonne(1).subscribe(data =>{

        this.elections=data;
      })

    }

    getRandomColor() {
      const colors = ['#F08080', '#98FB98', '#ADD8E6', '#E0FFFF', '#FFB6C1'];
      const index = Math.floor(Math.random() * colors.length);
      return colors[index];
    }

  }


