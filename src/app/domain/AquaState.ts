import { RelayState } from "./RelayState"

export interface AquaState extends RelayState{
    relays: string[],
    times: SwitchTime[],
    state: number[]
}

export interface SwitchTime {
    start: number,
    end: number,
    relay: number
}