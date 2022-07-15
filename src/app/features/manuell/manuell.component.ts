import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/+state/app.state';
import { loadRelayState, loadSettings, switchRelay } from 'src/app/+state/aqua.actions';

@Component({
  selector: 'app-manuell',
  templateUrl: './manuell.component.html',
  styleUrls: ['./manuell.component.scss']
})
export class ManuellComponent implements OnInit, OnDestroy {

  relayState$: Observable<number[]> = this.store.select(state=>state.aqua.state);
  relayNames$: Observable<string[]>   = this.store.select(state=>state.aqua.relays);
  reloadId = 0;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    console.log("init");
    this.reloadId = window.setInterval(()=>this.store.dispatch(loadRelayState()),5000);
  }

  ngOnDestroy(): void {
    console.log("destroy");
    clearInterval(this.reloadId);
  }

  switchRelay(relay:number) {
    this.store.dispatch(switchRelay({relay:relay}));
  }

}
