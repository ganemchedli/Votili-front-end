import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceElectionService } from 'src/app/service-election.service';

@Component({
  selector: 'app-newelection',
  templateUrl: './newelection.component.html',
  styleUrls: ['./newelection.component.css']
})
export class NewelectionComponent implements OnInit {
  constructor(private service: ServiceElectionService, private router: Router) { }
  data: any
  //mtee l ms génerer code
  code :any="OXAA22RR3"
  data1: string | undefined;

  form = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
     })
     ngOnInit(): void {
      this.service.getcode().subscribe((data1: string) => {
        this.code = data1;
      
      
      });
      
      
      }

    
    submit(){
      this.data = this.form.value
      this.data.code=this.code.codenum;
      this.data.statut=true;
      console.log(this.data)
  
      this.service.addElectionstandard(this.data).subscribe(data => {
        console.log(data)
      })
    
    }
}
