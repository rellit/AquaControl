import { createAction, props } from '@ngrx/store';
import { Settings, SwitchTime } from '../domain/Settings';
import { RelayState } from '../domain/RelayState';

export const loadRelayState = createAction('[AquaControl] Load RelayState');
export const loadedRelayState = createAction('[AquaControl] Loaded RelayState', props<RelayState>());
export const loadRelayStateError = createAction(
    '[AquaControl] loadRelayStateError',
    props<{ error: string }>()
);

export const loadSettings = createAction('[AquaControl] Load Settings');
export const loadedSettings = createAction('[AquaControl] Loaded Settings', props<Settings>());
export const loadSettingsError = createAction(
    '[AquaControl] loadSettingsError',
    props<{ error: string }>()
);

export const deleteSwitchTime = createAction('[AquaControl] Delete Switch Time', props<{switchTime: SwitchTime}>());
export const changeSwitchTime = createAction('[AquaControl] Change Switch Time', props<{switchTime: SwitchTime}>());
export const addSwitchTime = createAction('[AquaControl] Add Switch Time');
export const changeRelays = createAction('[AquaControl] Change Relays', props<{relays: string[]}>());

export const saveSettings = createAction('[AquaControl] Save Settings');
export const switchRelay = createAction('[AquaControl] Switch Relay', props<{relay:number}>());
