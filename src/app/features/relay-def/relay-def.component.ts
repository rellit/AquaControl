import {
  Component,
  OnInit,
  AfterContentInit,
  ViewChild,
  Input,
  ElementRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';
import { AppState } from 'src/app/+state/app.state';
import { changeRelays } from 'src/app/+state/aqua.actions';

@Component({
  selector: 'app-relay-def',
  templateUrl: './relay-def.component.html',
  styleUrls: ['./relay-def.component.scss'],
})
export class RelayDefComponent {
  relays$: Observable<String[]> = this.store.select(
    (state) => state.aqua.relays
  );

  constructor(private store: Store<AppState>, private elRef: ElementRef) {}

  change(): void {
    var relays: string[] = [];
    this.relays$.subscribe((rel) => {
      rel.forEach((r, i) => {
        console.log("Val "+i,this.elRef.nativeElement.querySelector(`input[name='relay-${i}']`).value);
        relays.push(this.elRef.nativeElement.querySelector(`input[name='relay-${i}']`).value);
      });
      console.log(relays);
    }).unsubscribe();


    console.log("Dispatch");
    this.store.dispatch(
      changeRelays({
        relays: relays
      })
    );
  }
}
