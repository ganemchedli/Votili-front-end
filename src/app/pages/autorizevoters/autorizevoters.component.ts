import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autorizevoters',
  templateUrl: './autorizevoters.component.html',
  styleUrls: ['./autorizevoters.component.css']
})
export class AutorizevotersComponent implements OnInit {
  ngOnInit(): void {
    
  }
  id: number =0;
   cin: number =0;
 cinAutorise: number[] = [123456,1114889,5671123,1230045];

 ajoutcin(){
  this.cinAutorise.push(this.cin);
  this.id=this.id+1;
 }
 supprimer(index: number){
  this.cinAutorise.splice(index,1);
}

}
