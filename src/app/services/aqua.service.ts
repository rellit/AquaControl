import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RelayState } from '../domain/RelayState';
import { map } from 'rxjs/operators';
import { Settings } from '../domain/Settings';
import { v4 as uuid } from 'uuid';
import { AquaState } from '../+state/aqua.state';

@Injectable({
  providedIn: 'root',
})
export class AquaService {
  apiBase: string = 'http://aquarium/api';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  options = { headers: this.headers };

  constructor(private http: HttpClient) {}

  getRelayState(): Observable<RelayState> {
    //return of({state: [1,0,1,0,1,0,0,0]});
    return this.http.get<RelayState>(this.apiBase + '/relayState');
  }

  switchRelay(relay:number): Observable<RelayState> {
    //return of({state: [1,0,1,0,1,0,0,0]});
    return this.http.get<RelayState>(this.apiBase + '/switch?relay='+relay);
  }

  getSettings(): Observable<Settings> {
    //return of({relays:["aa","bb","cc","dd","ee","ff","gg","hh"], times:[{start:0, end:1, relay:3},{start:0, end:1, relay:3},{start:0, end:1, relay:3},{start:0, end:1, relay:3}], state:[1,0,0,0,1,0,0,0]})
    return this.http
      .get<Settings>(this.apiBase + '/settings')
      .pipe(this.generateUUID);
  }

  generateUUID = map((s: Settings) => {
    s.times.forEach((element) => {
      element.id = uuid();
    });
    return s;
  });

  storeSettings(s: Settings): Observable<Settings> {
    console.log(s);
    // return of(s)
    return this.http
      .post<Settings>(this.apiBase + '/settings', s, this.options)
      .pipe(this.generateUUID);
  }
}
