import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AquaState } from './domain/AquaState';
import { RelayState } from './domain/RelayState';
import { AquaService } from './services/aqua.service';
import { AppState } from './state/app.state';
import { loadedRelayState, loadedSettings, loadRelayState, loadSettings } from './state/aqua.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AquaControl';

  constructor(private store: Store<AppState>, private aquaService: AquaService) { 
  }

  ngOnInit(): void {
    this.reloadRelayState();
  }

  reloadRelayState():void{
    this.store.dispatch(loadRelayState());
    setTimeout(() => {
      this.reloadRelayState();
    }, 5000);
  }
}
