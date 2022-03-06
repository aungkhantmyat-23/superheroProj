import { Villains } from './../models/villains';
import { Observable, pluck } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VillainsService {
  constructor(private http: HttpClient) {}
  getVillains(): Observable<any> {
    return this.http.get<Villains[]>('assets/db.json').pipe(pluck('villains'));
  }
}
