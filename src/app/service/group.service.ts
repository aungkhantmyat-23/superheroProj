import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Group {
  constructor(private http: HttpClient) {}

  getGroups(): Observable<any> {
    return this.http.get<Group[]>('assets/db.json').pipe(pluck('groups'));
  }
}
