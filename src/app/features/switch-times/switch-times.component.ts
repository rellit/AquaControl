import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/+state/app.state';
import { addSwitchTime } from 'src/app/+state/aqua.actions';
import { SwitchTime } from 'src/app/domain/Settings';

@Component({
  selector: 'app-switch-times',
  templateUrl: './switch-times.component.html',
  styleUrls: ['./switch-times.component.scss']
})
export class SwitchTimesComponent implements OnInit {
  switchTimes$: Observable<SwitchTime[]> = this.store.select(state => state.aqua.times);
  
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  addNewTime():void {
    this.store.dispatch(addSwitchTime());
  }

}
