import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AquaService } from '../services/aqua.service';
import { AppState } from './app.state';
import {
  loadedRelayState,
  loadedSettings,
  loadRelayState,
  loadRelayStateError,
  loadSettings,
  loadSettingsError,
  saveSettings,
  switchRelay,
} from './aqua.actions';

@Injectable()
export class AquaEffects {
  loadSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSettings),
      switchMap(() =>
        this.aquaService.getSettings().pipe(
          map((settings) => loadedSettings(settings)),
          catchError((error) => of(loadSettingsError({ error })))
        )
      )
    )
  );

  loadRelayState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRelayState),
      switchMap(() =>
        this.aquaService.getRelayState().pipe(
          map((relayState) => loadedRelayState(relayState)),
          catchError((error) => of(loadRelayStateError({ error })))
        )
      )
    )
  );

  switchRelay$ = createEffect(() =>
    this.actions$.pipe(
      ofType(switchRelay),
      switchMap((a) =>
        this.aquaService.switchRelay(a.relay).pipe(
          map((relayState) => loadedRelayState(relayState)),
          catchError((error) => of(loadRelayStateError({ error })))
        )
      )
    )
  );

  saveSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveSettings),
      withLatestFrom(this.store$),
      switchMap((a) =>
        this.aquaService
          .storeSettings({ relays: a[1].aqua.relays, times: a[1].aqua.times })
          .pipe(
            map((relayState) => loadedSettings(relayState)),
            catchError((error) => of(loadSettingsError({ error })))
          )
      )
    )
  );

  constructor(
    private aquaService: AquaService,
    private actions$: Actions,
    private store$: Store<AppState>
  ) {}
}
