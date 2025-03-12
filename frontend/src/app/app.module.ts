import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Aggiungi questa importazione


const routes: Routes = [
    { path: 'clienti', loadComponent: () => import('./components/cliente/cliente.component').then(m => m.ClienteComponent) },
    { path: 'automobili', loadComponent: () => import('./components/automobile/automobile.component').then(m => m.AutomobileComponent) },
    { path: '', redirectTo: '/clienti', pathMatch: 'full' }
  ];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule // Aggiungi questo modulo
  ],
  providers: [],
  bootstrap: [] // ❌ Rimuovi AppComponent se usi Standalone API
})
export class AppModule
