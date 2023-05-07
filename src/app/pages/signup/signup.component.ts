import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceElectionService } from 'src/app/service-election.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  imageUrl = "assets/images/logo1.png";
  constructor(private serviceelection: ServiceElectionService , private router: Router) { }
  data: any
  droitDeVote :boolean=true;
  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmepassword: new FormControl('', [Validators.required]),
    numcin: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    bac: new FormControl('', [Validators.required]),
    droitDeVote: new FormControl('', [Validators.required])

  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.serviceelection.adduser(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}
