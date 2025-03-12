import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Aggiungi questa importazione
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AutomobileComponent } from './components/automobili/automobili.component';
import { AppRoutingModule } from './app-routing.module'; // Import routing module

const routes: Routes = [
    { path: 'clienti', loadComponent: () => import('./components/cliente/cliente.component').then(m => m.ClienteComponent) },
    { path: 'automobili', loadComponent: () => import('./components/automobili/automobili.component').then(m => m.AutomobileComponent) },
    { path: '', redirectTo: '/clienti', pathMatch: 'full' }
  ];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule // Aggiungi questo modulo
  ],
  providers: [],
  bootstrap: [] // ❌ Rimuovi AppComponent se usi Standalone API
})
export class AppModule
