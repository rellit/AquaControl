import { Component, Input, OnInit } from '@angular/core';
import { AquaService } from 'src/app/services/aqua.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadedRelayState, loadRelayState, loadSettings, saveSettings, switchRelay } from '../../state/aqua.actions';
import { AquaState } from 'src/app/domain/AquaState';
import { RelayState } from 'src/app/domain/RelayState';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-state-bar',
  templateUrl: './state-bar.component.html',
  styleUrls: ['./state-bar.component.scss']
})
export class StateBarComponent implements OnInit {

  relayState$: Observable<number[]> = this.store.select(state=>state.aqua.state);
  relayNames$: Observable<string[]>   = this.store.select(state=>state.aqua.relays);

  constructor(private store: Store<AppState>) { 
  }

  ngOnInit(): void {
    this.store.dispatch(loadSettings());
    this.store.dispatch(loadRelayState());
  }

}
