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
import { aquaReducer } from './state/aqua.reducer';
import { AquaEffects } from './state/aqua.effect';

import { AppComponent } from './app.component';
import { StateBarComponent } from './components/state-bar/state-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { SettingsTabsComponent } from './components/settings-tabs/settings-tabs.component';
import { SwitchTimesComponent } from './components/switch-times/switch-times.component';
import { RelaysComponent } from './components/relays/relays.component';
import { RelayComponent } from './components/relay/relay.component';
import { SwitchTimeComponent } from './components/switch-times/switch-time/switch-time.component';
import { MatUIModule } from './modules/mat-uimodule/mat-ui.module';


@NgModule({
  declarations: [
    AppComponent,
    StateBarComponent,
    ButtonComponent,
    SettingsTabsComponent,
    SwitchTimesComponent,
    RelaysComponent,
    RelayComponent,
    SwitchTimeComponent
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
