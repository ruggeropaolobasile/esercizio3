import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Cliente {
  id: number;
  nome: string;
  cognome: string;
  email: string;
}

interface Automobile {
  id: number;
  modello: string;
  clienteId: number;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  standalone: true,
  styleUrls: ['./cliente.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ClienteComponent implements OnInit {
  clienti: Cliente[] = [];
  nuovoCliente: Cliente = { id: 0, nome: '', cognome: '', email: '' };
  clienteModifica: Cliente | null = null;
  automobili: Automobile[] = [];
  automobiliVisibili: Automobile[] = [];
  private apiUrl = 'http://localhost:3000/api/clienti'; // URL del backend
  private automobiliUrl = 'http://localhost:3000/api/automobili'; // URL delle automobili

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getClienti();
    this.getAutomobili();
  }

  getClienti(): void {
    this.http.get<Cliente[]>(this.apiUrl)
      .pipe(
        catchError((error) => {
          console.error('Errore nel recupero dei clienti:', error);
          return of([]);
        })
      )
      .subscribe((data) => (this.clienti = data));
  }

  getAutomobili(): void {
    this.http.get<Automobile[]>(this.automobiliUrl)
      .pipe(
        catchError((error) => {
          console.error('Errore nel recupero delle automobili:', error);
          return of([]);
        })
      )
      .subscribe((data) => (this.automobili = data));
  }

  aggiungiCliente(): void {
    const { nome, cognome, email } = this.nuovoCliente;
    if (!nome || !cognome || !email) {
      alert('Compila tutti i campi!');
      return;
    }
    this.http.post<Cliente>(this.apiUrl, this.nuovoCliente)
      .pipe(
        catchError((error) => {
          console.error("Errore nell'aggiunta del cliente:", error);
          return of(null);
        })
      )
      .subscribe((cliente) => {
        if (cliente) {
          this.clienti.push(cliente);
          this.nuovoCliente = { id: 0, nome: '', cognome: '', email: '' }; // Reset del form
        }
      });
  }

  selezionaCliente(cliente: Cliente): void {
    this.clienteModifica = { ...cliente };
  }

  modificaCliente(): void {
    if (!this.clienteModifica) return;

    this.http.put<Cliente>(`${this.apiUrl}/${this.clienteModifica.id}`, this.clienteModifica)
      .pipe(catchError(error => (console.error('Errore nella modifica:', error), of(null))))
      .subscribe(cliente => {
        if (!cliente) return;
        this.getClienti(); // Richiama il metodo per aggiornare la lista dei clienti
        this.clienteModifica = null;
      });
  }

  eliminaCliente(id: number): void {
    if (!confirm('Sei sicuro di voler eliminare questo cliente?')) return;

    this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error) => {
          console.error("Errore nell'eliminazione del cliente:", error);
          return of(null);
        })
      )
      .subscribe(() => {
        this.clienti = this.clienti.filter((c) => c.id !== id);
      });
  }

  selezionaAutomobile(cliente: Cliente): void {
    this.automobiliVisibili = this.automobili.filter(auto => auto.clienteId === cliente.id);
  }
}