import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';

import { AppState } from 'src/app/+state/app.state';
import { deleteSwitchTime } from 'src/app/+state/aqua.actions';
import { SwitchTime } from 'src/app/domain/Settings';

@Component({
  selector: 'app-switch-time',
  templateUrl: './switch-time.component.html',
  styleUrls: ['./switch-time.component.scss']
})
export class SwitchTimeComponent implements OnInit {

  @Input() switchTime:SwitchTime;
  @Input() switchTimeIndex: number;

  relayNames$: Observable<string[]> = this.store.select(s=>s.aqua.relays);
  switchTimes$: Observable<SwitchTime[]> = this.store.select(s=>s.aqua.times);

  formatTimeForInput(time:number):string {
    let t = String(time).padStart(4,'0');
    return t.substring(0,2)+":"+t.substring(2,4);
  }

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  async deleteSwitchTime(st:SwitchTime):Promise<void> {
    this.store.dispatch(deleteSwitchTime({value: this.switchTimeIndex}));
  }

}
