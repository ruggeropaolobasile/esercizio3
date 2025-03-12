import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AutomobileComponent } from './components/automobili/automobili.component';

const routes: Routes = [
  { path: '', redirectTo: 'clienti', pathMatch: 'full' }, // Redirect alla pagina clienti
  { path: 'clienti', component: ClienteComponent }, // Rotta per clienti
  { path: 'automobili', component: AutomobileComponent }, // ✅ Route for automobili
  { path: '**', redirectTo: 'clienti' } // Rotta di fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
