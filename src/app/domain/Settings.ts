import { RelayState } from './RelayState';

export interface Settings {
  relays: string[];
  times: SwitchTime[];
}

export interface SwitchTime {
  id?: string;
  start: number;
  end: number;
  relay: number;
}
