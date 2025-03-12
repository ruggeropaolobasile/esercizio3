import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: 'clienti', loadComponent: () => import('./components/cliente/cliente.component').then(m => m.ClienteComponent) },
    { path: 'automobili', loadComponent: () => import('./components/automobile/automobile.component').then(m => m.AutomobileComponent) },
    { path: '', redirectTo: '/clienti', pathMatch: 'full' }
  ];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [] // ❌ Rimuovi AppComponent se usi Standalone API
})
export class AppModule {}import { NgModule } from '@angular/core';
