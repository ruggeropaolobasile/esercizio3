import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// 🔹 Importa i componenti usati nell'app
import { AppComponent } from './app.component'; 
import { ClienteComponent } from './components/cliente/cliente.component'; // Assicurati che il percorso sia corretto

@NgModule({
  declarations: [ // 🔹 Dichiarazione dei componenti
    AppComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 🔹 Deve avere un componente principale
})
export class AppModule { }
