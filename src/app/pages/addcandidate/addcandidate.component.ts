import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceElectionService } from 'src/app/service-election.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit {
  condidats: any[] | undefined;
url: string = "http://localhost:9138/";
constructor(private service: ServiceElectionService, private router: Router) { 
   
}
ngOnInit(): void {
  this.service.getallusers().subscribe((data: any[]) => {
    this.condidats = data;
  });
  
  }
}


