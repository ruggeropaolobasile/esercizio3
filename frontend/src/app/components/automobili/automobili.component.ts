import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


interface Automobile {
  id: number;
  modello: string;
  clienteId: number;
}

@Component({
  selector: 'app-automobile',
  templateUrl: './automobili.component.html',
  standalone: true,
  styleUrls: ['./automobili.component.css'],
  imports: [CommonModule, FormsModule,HttpClientModule]
})
export class AutomobileComponent implements OnInit {
  automobili: Automobile[] = [];
  private automobiliUrl = 'http://localhost:3000/api/automobili'; // URL delle automobili

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAutomobili();
  }

  getAutomobili(): void {
    this.http.get<Automobile[]>(this.automobiliUrl).pipe(
      catchError((error) => {
        console.error("❌ Errore nel recupero delle automobili:", error);
        return of([]); // Return an empty array on error
      })
    ).subscribe((data) => {
      console.log("🚗 Automobili caricate dal server:", data); // ✅ Debug log
      this.automobili = data;
    });
  }
}


