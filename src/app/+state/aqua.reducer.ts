import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { AquaState } from '../domain/AquaState';
import { AquaService } from '../services/aqua.service';
import { loadedRelayState, loadedSettings, loadSettings, saveSettings, switchRelay } from './aqua.actions';

export const initialState: AquaState = { relays: [], times: [], state: [] };

export const aquaReducer = createReducer(
    initialState,
    on(loadedRelayState, (state, relayState) => {
        return { ...state, state: relayState.state }
    }),
    on(loadedSettings, (state, aquaState) => {return {...state, relays:aquaState.relays, times:aquaState.times}})
);