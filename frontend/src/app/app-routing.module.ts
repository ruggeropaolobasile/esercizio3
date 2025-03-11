import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component'; // Assicurati che il percorso sia corretto

const routes: Routes = [
  { path: '', redirectTo: 'clienti', pathMatch: 'full' }, // Reindirizza alla pagina clienti
  { path: 'clienti', component: ClienteComponent } // Route per i clienti
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }