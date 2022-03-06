import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { Hero } from '../models/heros';

@Injectable({
  providedIn: 'root',
})
export class HerosService {
  constructor(private http: HttpClient) {}
  getHeros(): Observable<any> {
    return this.http.get<Hero[]>('assets/db.json').pipe(pluck('heros'));
  }
}
