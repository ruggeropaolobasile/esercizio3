import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // ✅ Aggiunto

const routes: Routes = [ // ✅ Usa Routes (non Route[])
  { 
    path: 'clienti', 
    loadComponent: () => import('./app/components/cliente/cliente.component')
      .then(m => m.ClienteComponent) 
  },
  { 
    path: '', 
    redirectTo: 'clienti', 
    pathMatch: 'full'  // ✅ Assicurati che sia "full"
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(FormsModule, RouterModule)
  ]
}).catch(err => console.error(err));