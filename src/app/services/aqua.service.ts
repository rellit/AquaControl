import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RelayState } from '../domain/RelayState';
import { map } from 'rxjs/operators';
import { Settings } from '../domain/Settings';

@Injectable({
  providedIn: 'root'
})
export class AquaService {

  constructor(private http: HttpClient) { }

  getRelayState(): Observable<RelayState>{
    //return of({state: [1,0,1,0,1,0,0,0]});
    return this.http.get<RelayState>("http://aquarium/api/relayState");
  }

  getSettings(): Observable<Settings>{
    //return of({relays:["aa","bb","cc","dd","ee","ff","gg","hh"], times:[{start:0, end:1, relay:3},{start:0, end:1, relay:3},{start:0, end:1, relay:3},{start:0, end:1, relay:3}], state:[1,0,0,0,1,0,0,0]})
    return this.http.get<Settings>("http://aquarium/api/settings");
  }
}
