import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SwitchTime } from 'src/app/domain/AquaState';
import { AppState } from 'src/app/+state/app.state';

@Component({
  selector: 'app-switch-time',
  templateUrl: './switch-time.component.html',
  styleUrls: ['./switch-time.component.scss']
})
export class SwitchTimeComponent implements OnInit {

  @Input() switchTime:SwitchTime;

  relayNames$: Observable<string[]> = this.store.select(s=>s.aqua.relays);

  get startTime():string {
    return "00:00";
  }

  set startTime(time:string) {
    this.switchTime.start = Number(time.replace(":",""));
  }

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

}
