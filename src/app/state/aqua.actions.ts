import { createAction, props } from '@ngrx/store';
import { AquaState } from '../domain/AquaState';
import { RelayState } from '../domain/RelayState';
import { AquaService } from '../services/aqua.service';

export const loadRelayState = createAction('[AquaControl] Load RelayState');
export const loadedRelayState = createAction('[AquaControl] Loaded RelayState', props<RelayState>());
export const loadRelayStateError = createAction(
    '[AquaControl] loadRelayStateError',
    props<{ error: string }>()
);

export const loadSettings = createAction('[AquaControl] Load Settings');
export const loadedSettings = createAction('[AquaControl] Loaded Settings', props<AquaState>());
export const loadSettingsError = createAction(
    '[AquaControl] loadSettingsError',
    props<{ error: string }>()
);

export const saveSettings = createAction('[AquaControl] Save Settings');
export const switchRelay = createAction('[AquaControl] Switch Relay');