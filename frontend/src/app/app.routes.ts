import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'clienti', loadComponent: () => import('./components/cliente/cliente.component').then(m => m.ClienteComponent) },
  { path: 'automobili', loadComponent: () => import('./components/automobili/automobili.component').then(m => m.AutomobileComponent) },
  { path: '', redirectTo: '/clienti', pathMatch: 'full' }
];
