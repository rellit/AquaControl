import { SwitchTime } from "../domain/Settings"

export interface AquaState {
    status: SettingsState,
    relays: string[],
    times: SwitchTime[],
    state: number[]
}

export interface SettingsState {
    status: 'pending' | 'normal' | 'unsaved' | 'saved' | 'error';
    errorMessage?: string;
}
