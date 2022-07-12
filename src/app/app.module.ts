import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment'; // Angular CLI environment
import { aquaReducer } from './+state/aqua.reducer';
import { AquaEffects } from './+state/aqua.effect';

import { AppComponent } from './app.component';
import { RelayComponent } from './features/relay-def/relay/relay.component';
import { SwitchTimeComponent } from './features/switch-times/switch-time/switch-time.component';
import { MatUIModule } from './modules/mat-uimodule/mat-ui.module';
import { ManuellComponent } from './features/manuell/manuell.component';
import { RelayDefComponent } from './features/relay-def/relay-def.component';
import { SwitchTimesComponent } from './features/switch-times/switch-times.component';


@NgModule({
  declarations: [
    AppComponent,
    RelayComponent,
    SwitchTimeComponent,
    SwitchTimesComponent,
    ManuellComponent,
    RelayDefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatUIModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({aqua: aquaReducer}),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode

    }),
    EffectsModule.forRoot([AquaEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
