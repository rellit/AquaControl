import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';

import { AppState } from 'src/app/+state/app.state';
import {
  changeSwitchTime,
  deleteSwitchTime,
} from 'src/app/+state/aqua.actions';
import { SwitchTime } from 'src/app/domain/Settings';

@Component({
  selector: 'app-switch-time',
  templateUrl: './switch-time.component.html',
  styleUrls: ['./switch-time.component.scss'],
})
export class SwitchTimeComponent implements OnInit {
  @Input() switchTime: SwitchTime;

  formGroup = new FormGroup({
    id: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl(''),
    relay: new FormControl(0),
  });

  relayNames$: Observable<string[]> = this.store.select((s) => s.aqua.relays);
  switchTimes$: Observable<SwitchTime[]> = this.store.select(
    (s) => s.aqua.times
  );

  formatTimeForInput(time: number): string {
    let t = String(time).padStart(4, '0');
    return t.substring(0, 2) + ':' + t.substring(2, 4);
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.formGroup.setValue({
      id: this.switchTime.id,
      start: this.formatTimeForInput(this.switchTime.start),
      end: this.formatTimeForInput(this.switchTime.end),
      relay: this.switchTime.relay,
    });
    this.formGroup.valueChanges.subscribe((s) => {
      this.change(s);
    });
  }

  deleteSwitchTime(): void {
    this.store.dispatch(deleteSwitchTime({ switchTime: this.switchTime }));
  }

  change(newVal): void {
    this.store.dispatch(
      changeSwitchTime({
        switchTime: {
          ...newVal,
          start: Number(newVal.start.replace(':', '')),
          end: Number(newVal.end.replace(':', '')),
        },
      })
    );
  }
}
