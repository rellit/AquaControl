import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RelayState } from '../domain/RelayState';
import { map } from 'rxjs/operators';
import { Settings } from '../domain/Settings';
import {v4 as uuid} from 'uuid';
import { AquaState } from '../+state/aqua.state';

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
    return this.http.get<Settings>("http://aquarium/api/settings").pipe(this.generateUUID);
  }

  generateUUID = map((s:Settings)=>{
      s.times.forEach(element => {
        element.id=uuid();
      });
    return s;
    })
  

  storeSettings(a:AquaState): Observable<Settings>{
    console.log(a);
    return of({relays: a.relays, times:a.times, state:a.state})
  }
}
