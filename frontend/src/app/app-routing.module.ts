import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'clienti', pathMatch: 'full' }, // Redirect alla pagina clienti
  { path: 'clienti', component: ClienteComponent }, // Rotta per clienti
  { path: '**', redirectTo: 'clienti' } // Rotta di fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
