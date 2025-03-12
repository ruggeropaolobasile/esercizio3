import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Indica che il componente è standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule] // ✅ IMPORTA RouterModule per riconoscere <router-outlet>
})
export class AppComponent { }
