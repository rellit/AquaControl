import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators';
import { AquaService } from '../services/aqua.service';
import { loadedRelayState, loadedSettings, loadRelayState, loadRelayStateError, loadSettings, loadSettingsError } from './aqua.actions';

@Injectable()
export class AquaEffects {

  loadSettings$ = createEffect(() => this.actions$.pipe(
    ofType(loadSettings),
    switchMap(a => this.aquaService.getSettings().pipe(
      map(settings => loadedSettings(settings)),
      catchError(error => of(loadSettingsError({ error })))
    )),
  ));

  loadRelayState$ = createEffect(() => this.actions$.pipe(
    ofType(loadRelayState),
    switchMap(a => this.aquaService.getRelayState().pipe(
      map(relayState => loadedRelayState(relayState)),
      catchError(error => of(loadRelayStateError({ error })))
    )),
  ));

  constructor(
    private aquaService: AquaService,
    private actions$: Actions) { }

}