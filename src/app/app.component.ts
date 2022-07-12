import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './+state/app.state';
import { loadRelayState, loadSettings } from './+state/aqua.actions';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SettingsState } from './+state/aqua.state';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AquaControl';
  settingsSatus$: Observable<SettingsState> = this.store.select(as => as.aqua.status);

  constructor(private store: Store<AppState>, protected router: Router, private _snackBar: MatSnackBar) {
    this.settingsSatus$.subscribe(s => {
      if (s.status == 'error')
        this.openSnackBar(s.errorMessage, "OK");
      else if (s.status == 'saved')
        this.openSnackBar("Gespeichert", "OK");
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadRelayState());
    this.store.dispatch(loadSettings());
  }

  saveSettings(): void {
    console.log("TODO", "Emit save Settings");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
