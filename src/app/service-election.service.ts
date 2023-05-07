import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Election } from './Election';
import { ElectionProgrammee } from './ElectionProgrammee';
import { User } from './User';
import { Condidat } from './Condidat';
@Injectable({
  providedIn: 'root'
})
export class ServiceElectionService {


  private url = "http://localhost:9138/";
  private url1 = "http://localhost:9100/";

  constructor(private http: HttpClient) { }
//add election standard
addElectionstandard(Election: Election){
  return this.http.post<Election>(`${this.url}addElectionstandard`, Election)
}
//add election programmee
addElectionProgrammee(Electionp: ElectionProgrammee){
  return this.http.post<Election>(`${this.url}addElectionprograme`, Electionp)
}

//delete election

deleteelection(id:number): Observable<any>{
return this.http.delete<any>(`${this.url}deleteelection/${id}`)

}

//autoriservotant a une élection identifiée par id
AutoriserVotant(id?:number , user?:any):Observable<any>{

  return this.http.post<User>(`${this.url}adduserElection/${id}`, user)
}

//ajouter condidat
addcondidatElection(id?:number , condidat?:any):Observable<any>{

  return this.http.post<Condidat>(`${this.url}addCondidatElection/${id}`, condidat)
}

//tatini tout les élections li cherek fihom l personne he4a
getallelectionbypersonne(id:number):Observable<any[]>{
  return this.http.get<any[]>(`${this.url}getallelectionpersonne/${id}`)
}


//adduser
adduser(user: User){
  return this.http.post<User>(`${this.url}adduser`, user)
}

//addcondidat
addcondidat(condidat: Condidat){
  return this.http.post<Condidat>(`${this.url}addcondidat`, condidat)
}

//deletepersonne
deletepersonne(id: number): Observable<any>{
  return this.http.delete<any>(`${this.url}deletpersonne/${id}`)
}

//get les condidats d'une élection donnée
getcondidatsbyelection(id?:number, election?:any): Observable<any[]> {
  return this.http.get<any[]>(`${this.url}getcondidatsbyelection/${id}`);
}

//get les users d'une election donnée
getusersbyelection(id?:number, election?:any):Observable<HttpEvent<any[]>>{
  return this.http.get<any[]>(`${this.url}getusersbyelection/${id}`, election)
}

getcode():any{
  return this.http.get<any>(`${this.url1}creecodenum/`);

}

}
