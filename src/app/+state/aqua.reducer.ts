import { createReducer, on } from '@ngrx/store';
import { addSwitchTime, changeSwitchTime, deleteSwitchTime, loadedRelayState, loadedSettings, loadSettings, loadSettingsError, saveSettings, switchRelay } from './aqua.actions';
import { AquaState } from './aqua.state';

export const initialState: AquaState = { status: {status: 'pending', errorMessage: ''}, relays: [], times: [], state: [] };

export const aquaReducer = createReducer(
    initialState,
    on(loadedRelayState, (state, relayState) => {
        return { ...state, state: relayState.state }
    }),
    on(loadedSettings, (state, aquaState) => { return { ...state, status: { status: 'normal', errorMessage: '' }, relays: aquaState.relays, times: aquaState.times } }),
    on(loadSettingsError, (state, error) => { return { ...state, status: { status: 'error', errorMessage: error.error } } }),
    on(deleteSwitchTime, (state, payLoad) => { return { ...state, status: { status: 'unsaved', errorMessage: state.status.errorMessage }, times: state.times.filter(e=>e.id!=payLoad.switchTime.id) } }),
    on(addSwitchTime, (state) => { return { ...state, status: { status: 'unsaved', errorMessage: state.status.errorMessage }, times: [...state.times, { start: 0, end: 0, relay: 0 }] } }),
    on(changeSwitchTime, (state, payLoad) => { console.log(payLoad);return { ...state, status: { status: 'unsaved', errorMessage: state.status.errorMessage }, times: state.times.map(t=>t.id===payLoad.switchTime.id?payLoad.switchTime:t) } }),
);
