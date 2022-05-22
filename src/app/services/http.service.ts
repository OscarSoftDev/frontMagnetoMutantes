import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Mutante } from '../model/mutante.model';
import { Observable } from 'rxjs';
import { Estadistica } from '../model/estadistica.model';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

private url:string="http://localhost:8071";

  constructor(private http: HttpClient) { }

  public getEstadistica(): Observable<Estadistica> {
		return this.http.get<Estadistica>(this.url + `/stats`);
	}

  public postMutante(mutante: Mutante): Observable<Mutante> {
    //console.log(JSON.stringify(mutante));
		return this.http.post<Mutante>(this.url+`/mutant`,mutante);
	}
}
