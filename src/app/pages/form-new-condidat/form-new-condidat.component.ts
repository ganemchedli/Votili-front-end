import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceElectionService } from 'src/app/service-election.service';

@Component({
  selector: 'app-form-new-condidat',
  templateUrl: './form-new-condidat.component.html',
  styleUrls: ['./form-new-condidat.component.css']
})
export class FormNewCondidatComponent implements OnInit {
  imageUrl = "assets/images/logo1.png";
  constructor(private service: ServiceElectionService, private router: Router) { }
  data: any

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    pseudo: new FormControl('', [Validators.required]),
    numcin: new FormControl('', [Validators.required])
  })


  ngOnInit(): void {

  }

  
  

  submit(){
    this.data = this.form.value
     this.data.login="login";
     this.data.password="login";
     this.data.NbreVote=0;
    console.log(this.data)

    this.service.adduser(this.data).subscribe(data => {
      console.log(data)

    })
   
    this.router.navigate(['/']);
  }

}

