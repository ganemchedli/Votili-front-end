import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class StatserviceService {

  private url = "http://localhost:8103/";
  constructor(private http: HttpClient) { }

  //stat age<30 d'un condidat dont l'identité est id
  getstatageinf30(id:number, personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}stat<30/${id}`,personnes)
  }

  getstatagebetween30and50(id:number,personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}statbitween30and50/${id}`,personnes)
  }

  getstatagesup50(id:number,personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}statakbermind50/${id}`,personnes)
  }

  getstathavebac(id:number,personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}statHavebac/${id}`,personnes)
  }

  getstatnothavebac(id:number,personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}statnotHavebac/${id}`,personnes)
  }

  getstatfemme(id:number,personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}statfemme/${id}`,personnes)
  }

  getstathomme(id:number,personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}stathomme/${id}`,personnes)
  }

  getstatnord(id:number,personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}statnord/${id}`,personnes)
  }

  getstatsud(id:number,personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}statsud/${id}`,personnes)
  }

  getstatest(id:number,personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}statest/${id}`,personnes)
  }

  getstatouest(id:number,personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}statouest/${id}`,personnes)
  }

  winner(personnes?:any):Observable<any>{

    return this.http.get<any>(`${this.url}winner/`,personnes)
  }
  
  getstatcondidat(id:number,personnes?:any):Observable<any>{
    return this.http.get<any>(`${this.url}pourcentagevote/${id}`,personnes)

  }
  





}
