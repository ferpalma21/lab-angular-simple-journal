import  { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class JournalService {
  constructor (private http : Http) {}

//Para hacer una ruta
  getJournalEntries(){
    //para sacar la información del server como json
    return this.http.get('http://localhost:3000/api/journal-entries').map((res) => res.json());
  }
}
