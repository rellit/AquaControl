import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './+state/app.state';
import { loadRelayState, loadSettings } from './+state/aqua.actions';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AquaControl';

  constructor(private store: Store<AppState>, protected router:Router) { 

  }

  ngOnInit(): void {
    this.store.dispatch(loadRelayState());
    this.store.dispatch(loadSettings());
  }

    
}
