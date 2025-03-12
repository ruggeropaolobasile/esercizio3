import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [ 
  { 
    path: 'clienti', 
    loadComponent: () => import('./app/components/cliente/cliente.component')
      .then(m => m.ClienteComponent) 
  },
  { 
    path: 'automobili',  // ✅ Add missing route
    loadComponent: () => import('./app/components/automobili/automobili.component')
      .then(m => m.AutomobileComponent) 
  },
  { 
    path: '', 
    redirectTo: 'clienti', 
    pathMatch: 'full'  
  },
  { 
    path: '**', 
    redirectTo: 'clienti'  // ✅ Handle invalid routes
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(FormsModule, RouterModule)
  ]
}).catch(err => console.error(err));