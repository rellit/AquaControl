import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManuellComponent } from './features/manuell/manuell.component';
import { RelayDefComponent } from './features/relay-def/relay-def.component';
import { SwitchTimesComponent } from './features/switch-times/switch-times.component';

const routes: Routes = [
  { path: 'manuell', component: ManuellComponent },
  { path: 'switchTimes', component: SwitchTimesComponent },
  { path: 'relayDef', component: RelayDefComponent },
  { path: '',   redirectTo: '/manuell', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
