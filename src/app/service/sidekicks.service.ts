import { Sidekicks } from './../models/sidekicks';
import { Observable, pluck } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class SideKicksService {
    constructor(private http: HttpClient) {}
        getSideKicks():Observable<any>{
            return this.http.get<Sidekicks[]>('assets/db.json').pipe(pluck('sidekicks'));
        }
    
}