import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RelayState } from '../domain/RelayState';
import { map } from 'rxjs/operators';
import { AquaState } from '../domain/AquaState';

@Injectable({
  providedIn: 'root'
})
export class AquaService {

  constructor(private http: HttpClient) { }

  getRelayState(): Observable<RelayState>{
    return this.http.get<RelayState>("http://aquarium/api/relayState");
  }

  getSettings(): Observable<AquaState>{
    return this.http.get<AquaState>("http://aquarium/api/settings");
  }
}
